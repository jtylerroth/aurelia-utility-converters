'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currency = require('./currency');

Object.keys(_currency).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _currency[key];
    }
  });
});

var _filter = require('./filter');

Object.keys(_filter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _filter[key];
    }
  });
});

var _json = require('./json');

Object.keys(_json).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _json[key];
    }
  });
});

var _limit = require('./limit');

Object.keys(_limit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _limit[key];
    }
  });
});

var _md = require('./md5');

Object.keys(_md).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _md[key];
    }
  });
});

var _number = require('./number');

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _number[key];
    }
  });
});

var _sort = require('./sort');

Object.keys(_sort).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sort[key];
    }
  });
});
exports.configure = configure;
function configure(config) {
  config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
}