# mrspider-request

Middleware for [mrspider](https://github.com/vermiculite/mrspider) typically the first middleware setting the content and response properties of the page. So in further middlewares the downloaded contents are available via `page.content` and response via `page.response`.

## Install

`npm i -S mrspider-request`

## Usage

```js
var spider = require('mrspider');
var spiderRequest = require('mrspider-request');
spider.use(spiderRequest);
```
