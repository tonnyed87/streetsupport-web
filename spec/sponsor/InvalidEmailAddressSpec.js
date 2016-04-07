var postToApi = require('../../src/js/post-api-data')
var sinon = require('sinon')
var Model = require('../../src/js/models/SponsorModel')
var endpoints = require('../../src/js/api')
var browser = require('../../src/js/browser')

describe('Sponsor Model', function () {
  var model
  var browserLoaderStub

  describe('Invalid Email Address', function() {
    var postToApiStub
    beforeEach(function () {
      postToApiStub = sinon.stub(postToApi, 'post')

      browserLoaderStub = sinon.stub(browser, 'loading')

      model = new Model()
      model.formModel().email('invalid email address')
      model.formModel().message('message')

      model.submit()
    })

    afterEach(function () {
      postToApi.post.restore()
      browser.loading.restore()
    })

    it('should not post form to api', function () {
      expect(postToApiStub.calledOnce).toBeFalsy()
    })
  })
})