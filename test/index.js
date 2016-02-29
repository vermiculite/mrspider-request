var mrspiderRequest = require('..')();
var nock = require('nock');
var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();

describe('mrspider-request', function(done) {

    it('should work', function() {
        var address = 'http://www.abc.com';
        var html = '<h1>HI there!</h1>';
        var abc = nock(address)
            .get('/')
            .reply(200, html);
        var page = {
            url: address,
            setContent: sinon.spy()
        };
        mrspiderRequest._transform(page, 'utf8', function() {
            page.setContent.calledOnce.should.equal(true);
            page.setContent.firstCall.args[0].should.equal(html);
            done();
        });
    });
});
