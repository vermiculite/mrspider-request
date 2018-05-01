const MrspiderRequest = require('..')
const nock = require('nock')
const sinon = require('sinon')
const chai = require('chai')
const should = chai.should()

describe('mrspider-request', function () {

  it('should work', function (done) {
    const mrspiderRequest = MrspiderRequest()
    const address = 'http://www.abc.com'
    const html = '<h1>HI there!</h1>'
    const abc = nock(address)
      .get('/')
      .reply(200, html)

    mrspiderRequest(address, function (err, res, body) {
      body.should.equal(html)
      should.not.exist(err)
      should.exist(res)
      done()
    })
  })

  it('should use the default useragent if none supplied', function(done) {
    const mrspiderRequest = MrspiderRequest()
    const address = 'http://www.abc.com'
    const html = '<h1>HI there!</h1>'

    const abc = nock(address, {
      reqheaders: {
        'userAgent': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) ' +
        'AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.41 Safari/534.7'
      }
    })
      .get('/')
      .reply(200, html)

    mrspiderRequest(address, function (err, res, body) {
      should.not.exist(err)
      should.exist(res)
      body.should.equal(html)
      done()
    })
  })

  it('should use the useragent if supplied', function(done) {
    const mrspiderRequest = MrspiderRequest({userAgent: 'Banana'})
    const address = 'http://www.abc.com'
    const html = '<h1>HI there!</h1>'
    const abc = nock(address, {
      reqheaders: {
        'userAgent': 'Banana'
      }
    })
      .get('/')
      .reply(200, html)

    mrspiderRequest(address, function (err, res, body) {
      should.not.exist(err)
      should.exist(res)
      body.should.equal(html)
      done()
    })
  })
})
