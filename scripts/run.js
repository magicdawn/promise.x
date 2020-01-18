#!/usr/bin/env node

const {set, cd} = require('shelljs')
const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const yargs = require('yargs')
const _ = require('lodash')
const {execSync} = require('child_process')

const exec = cmd => {
  console.log('[exec]: %s', cmd)
  execSync(cmd, {stdio: 'inherit'})
}

set('-e')
set('-v')

const PROJECT_ROOT = path.join(__dirname, '..')
const packages = glob.sync('promise.*/', {
  cwd: PROJECT_ROOT,
})

const eachPackage = async fn => {
  cd(PROJECT_ROOT)
  for (let name of packages) {
    await Promise.resolve(fn(name))
  }
}

// "scripts": {
//   "test": "mocha",
//   "test-cover": "nyc --reporter=lcov --reporter=text mocha",
//   "report-cover": "codecov"
// },

yargs
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
    handler() {
      eachPackage(name => {
        cd(PROJECT_ROOT + '/' + name)
        exec('npx nyc --reporter=lcov --reporter=text mocha')
      })
    },
  })
  .command({
    command: 'report-cover',
    handler() {
      cd(PROJECT_ROOT)
      eachPackage(name => {
        name = _.trim(name, '/')
        exec(`npx codecov -F ${name}`)
      })
    },
  }).argv
