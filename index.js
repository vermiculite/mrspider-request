"use strict";

let through2 = require('through2');
var request = require('./lib/request');

module.exports = function(options) {

    let requester = request(options);

    return through2.obj(function (page, enc, next) {
        requester(page.url, (err, response, body) => {
            page.content = body;
            page.response = response;
            this.push(page);
            next();
        })
    })
};
