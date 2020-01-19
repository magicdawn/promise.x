#!/usr/bin/env node

const {set, cd} = require('shelljs')
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const yargs = require('yargs')
const _ = require('lodash')
const {execSync} = require('child_process')
const njk = require('nunjucks')

const exec = cmd => {
  console.log('[exec]: %s', cmd)
  execSync(cmd, {stdio: 'inherit'})
}

set('-e')
set('-v')
process.on('unhandledRejection', e => {
  console.error(e)
  process.exit(1)
})

const PROJECT_ROOT = path.join(__dirname, '..')
const packages = glob
  .sync('promise.*/', {
    cwd: PROJECT_ROOT,
  })
  .map(name => _.trim(name, '/'))

const eachPackage = fn => {
  cd(PROJECT_ROOT)
  for (let name of packages) {
    fn(name)
  }
}

// "scripts": {
//   "test": "mocha",
//   "test-cover": "nyc --reporter=lcov --reporter=text mocha",
//   "report-cover": "codecov"
// },

yargs
  .command({
    command: 'install-deps',
    desc: 'install-deps',
    handler() {
      eachPackage(name => {
        cd(PROJECT_ROOT + '/' + name)
        const isCI = Boolean(process.env.CI)
        const client = isCI ? 'npm' : 'cnpm'
        exec(`${client} i`)
      })
    },
  })
  .command({
    command: 'test',
    handler() {
      eachPackage(name => {
        cd(PROJECT_ROOT + '/' + name)
        exec('npx mocha')
      })
    },
  })
  .command({
    command: 'test-cover',
    description: 'test-cover',
    handler() {
      eachPackage(name => {
        cd(PROJECT_ROOT + '/' + name)
        exec('npx nyc --reporter=lcov --reporter=text mocha')
      })
    },
  })
  .command({
    command: 'test-cover-report',
    description: 'test-cover-report',
    handler() {
      const codecovConfigPath = path.join(PROJECT_ROOT, '.codecov.yml')

      eachPackage(name => {
        // test-cover
        cd(PROJECT_ROOT + '/' + name)
        exec('npx nyc --reporter=lcov --reporter=text mocha')

        // report
        cd(PROJECT_ROOT)
        const flag = name.replace(/^promise\./, 'p')
        exec(`npx codecov -C -F ${flag} -y ${codecovConfigPath}`)
      })
    },
  })
  .command({
    command: 'gen-readme',
    description: 'gen-readme',
    handler() {
      const desc = packages.reduce((prev, name) => {
        const pkg = require(PROJECT_ROOT + '/' + name + '/package.json')
        prev[name] = pkg.description
        return prev
      }, {})

      const flag = packages.reduce((prev, name) => {
        const flag = name.replace(/^promise\./, 'p')
        prev[name] = flag
        return prev
      }, {})

      // promise.x readme
      {
        const file = PROJECT_ROOT + '/' + 'README.md'
        const tpl = __dirname + '/' + 'README.md.njk'
        const tplContent = fs.readFileSync(tpl, 'utf8')
        const content = njk.renderString(tplContent, {packages, desc, flag})
        fs.writeFileSync(file, content, 'utf8')
        console.log('[gen-readme]: %s generated !', file)
      }

      // per pkg
      {
        for (let name of packages) {
          const file = path.join(PROJECT_ROOT, name, 'README.md')
          const tpl = __dirname + '/' + 'pkg.README.md.njk'
          const tplContent = fs.readFileSync(tpl, 'utf8')

          let API = ''
          const API_MD_PATH = path.join(PROJECT_ROOT, name, 'API.md')
          if (fs.existsSync(API_MD_PATH)) {
            API = fs.readFileSync(API_MD_PATH, 'utf8')
          }

          const content = njk.renderString(tplContent, {
            name,
            API,
            desc: desc[name],
            flag: flag[name],
          })
          fs.writeFileSync(file, content, 'utf8')
          console.log('[gen-readme]: %s generated !', file)
          exec(`npx prettier --write ${file}`)
        }
      }
    },
  })
  .demandCommand()
  .help().argv
