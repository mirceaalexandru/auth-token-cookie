'use strict'

var Lab = require('lab')
var lab = exports.lab = Lab.script()
var suite = lab.suite
var test = lab.test

var Code = require('code')
var expect = Code.expect

suite('token-cookie suite set token tests', function () {
  test('simple test', function (done) {
    var si = require('seneca')()

    si.use(require('..'))
    done()
  })
})
