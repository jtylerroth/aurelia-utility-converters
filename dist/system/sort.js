"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var SortValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("SortValueConverter", SortValueConverter = function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        SortValueConverter.prototype.toView = function toView(array, property) {
          var sortAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

          if (!array) {
            return;
          }
          if (!property) {
            return array;
          }
          array.sort(function (a, b) {
            if (a[property] < b[property]) {
              return sortAsc ? -1 : 1;
            }
            if (a[property] > b[property]) {
              return sortAsc ? 1 : -1;
            }
            return 0;
          });
          return array;
        };

        return SortValueConverter;
      }());

      _export("SortValueConverter", SortValueConverter);
    }
  };
});