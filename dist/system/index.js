'use strict';

System.register(['./currency', './filter', './json', './limit', './md5', './number', './sort'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
  }

  _export('configure', configure);

  return {
    setters: [function (_currency) {
      var _exportObj = {};

      for (var _key in _currency) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _currency[_key];
      }

      _export(_exportObj);
    }, function (_filter) {
      var _exportObj2 = {};

      for (var _key2 in _filter) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _filter[_key2];
      }

      _export(_exportObj2);
    }, function (_json) {
      var _exportObj3 = {};

      for (var _key3 in _json) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _json[_key3];
      }

      _export(_exportObj3);
    }, function (_limit) {
      var _exportObj4 = {};

      for (var _key4 in _limit) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _limit[_key4];
      }

      _export(_exportObj4);
    }, function (_md) {
      var _exportObj5 = {};

      for (var _key5 in _md) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _md[_key5];
      }

      _export(_exportObj5);
    }, function (_number) {
      var _exportObj6 = {};

      for (var _key6 in _number) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _number[_key6];
      }

      _export(_exportObj6);
    }, function (_sort) {
      var _exportObj7 = {};

      for (var _key7 in _sort) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _sort[_key7];
      }

      _export(_exportObj7);
    }],
    execute: function () {}
  };
});