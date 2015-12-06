var request = require('request');

var HEADERS = {
    'accept': "application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5"
    ,
    'accept-language': 'en-US,en;q=0.8'
    ,
    'accept-charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3'
    ,
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36'
};


module.exports = function (page, spider, next) {

    request({
        uri: page.url,
        headers: HEADERS,
        method: 'GET'
    }, function (err, response, body) {
        page.setContent(body);
        page.response = response;
        next();
    });
};
