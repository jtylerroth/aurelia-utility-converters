"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var LimitValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("LimitValueConverter", LimitValueConverter = function () {
        function LimitValueConverter() {
          _classCallCheck(this, LimitValueConverter);
        }

        LimitValueConverter.prototype.toView = function toView(array, amount) {
          if (array) {
            return array.slice(0, amount);
          }
        };

        return LimitValueConverter;
      }());

      _export("LimitValueConverter", LimitValueConverter);
    }
  };
});