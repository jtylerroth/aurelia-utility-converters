"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var FilterValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("FilterValueConverter", FilterValueConverter = function () {
        function FilterValueConverter() {
          _classCallCheck(this, FilterValueConverter);
        }

        FilterValueConverter.prototype.toView = function toView(array, property, value) {
          if (!array || !property || !value) {
            return array;
          }
          return array.filter(function (item) {
            return item[property].toLowerCase().indexOf(value.toLowerCase()) > -1;
          });
        };

        return FilterValueConverter;
      }());

      _export("FilterValueConverter", FilterValueConverter);
    }
  };
});