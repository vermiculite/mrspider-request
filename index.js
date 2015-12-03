var request = require('request');
module.exports = function (page, spider, next) {
    request(page.url, function (err, response, body) {
        page.setContent(body);
        page.response = response;
        next();
    });
};