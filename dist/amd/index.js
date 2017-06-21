define(['exports', './currency', './filter', './json', './limit', './md5', './number', './sort'], function (exports, _currency, _filter, _json, _limit, _md, _number, _sort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_currency).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _currency[key];
      }
    });
  });
  Object.keys(_filter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _filter[key];
      }
    });
  });
  Object.keys(_json).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _json[key];
      }
    });
  });
  Object.keys(_limit).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _limit[key];
      }
    });
  });
  Object.keys(_md).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _md[key];
      }
    });
  });
  Object.keys(_number).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _number[key];
      }
    });
  });
  Object.keys(_sort).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sort[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
  }
});