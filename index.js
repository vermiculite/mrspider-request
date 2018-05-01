const request = require('request')
const headers = {
  'accept': 'application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5',
  'accept-language': 'en-US,en;q=0.8',
  'accept-charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3'
}

const firefox = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) ' +
  'AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.517.41 Safari/534.7'

function doRequest ({userAgent = firefox}) {

  return function (url, callback) {
    request.get({
      url,
      headers: {
        ...headers,
        userAgent,
      }
    }, callback)
  }
}

module.exports = function(options = {}) {
  return doRequest(options)
}

