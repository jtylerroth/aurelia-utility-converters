'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var NumberValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('NumberValueConverter', NumberValueConverter = function () {
        function NumberValueConverter() {
          _classCallCheck(this, NumberValueConverter);

          this.defaultOptions = {
            locale: 'en-US',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          };
        }

        NumberValueConverter.prototype.toView = function toView(value) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          if (value) {
            return Number(value).toLocaleString(options.locale || this.defaultOptions.locale, {
              maximumFractionDigits: options.maximumFractionDigits || this.defaultOptions.maximumFractionDigits,
              minimumFractionDigits: options.minimumFractionDigits || this.defaultOptions.minimumFractionDigits
            });
          }
        };

        return NumberValueConverter;
      }());

      _export('NumberValueConverter', NumberValueConverter);
    }
  };
});