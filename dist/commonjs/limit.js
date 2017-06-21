define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var LimitValueConverter = exports.LimitValueConverter = function () {
    function LimitValueConverter() {
      _classCallCheck(this, LimitValueConverter);
    }

    LimitValueConverter.prototype.toView = function toView(array, amount) {
      if (array) {
        return array.slice(0, amount);
      }
    };

    return LimitValueConverter;
  }();
});