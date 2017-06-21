"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortValueConverter = exports.SortValueConverter = function () {
  function SortValueConverter() {
    _classCallCheck(this, SortValueConverter);
  }

  SortValueConverter.prototype.toView = function toView(array, property) {
    var sortAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (!array) {
      return;
    }
    if (!property) {
      return array;
    }
    array.sort(function (a, b) {

      var aProp = void 0;
      var bProp = void 0;
      if (typeof a[property] == "string") {
        aProp = a[property].toUpperCase();
      } else {
        aProp = a[property];
      }
      if (typeof b[property] == "string") {
        bProp = b[property].toUpperCase();
      } else {
        bProp = b[property];
      }

      if (aProp < bProp) {
        return sortAsc ? -1 : 1;
      }
      if (aProp > bProp) {
        return sortAsc ? 1 : -1;
      }
      return 0;
    });
    return array;
  };

  return SortValueConverter;
}();