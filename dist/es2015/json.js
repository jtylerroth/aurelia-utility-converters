define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let JsonValueConverter = exports.JsonValueConverter = class JsonValueConverter {
    toView(value) {
      if (value) {
        return JSON.stringify(value, null, '\t');
      }
    }
  };
});