define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var JsonValueConverter = exports.JsonValueConverter = function () {
    function JsonValueConverter() {
      _classCallCheck(this, JsonValueConverter);
    }

    JsonValueConverter.prototype.toView = function toView(value) {
      if (value) {
        return JSON.stringify(value, null, '\t');
      }
    };

    return JsonValueConverter;
  }();
});