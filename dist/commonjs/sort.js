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
}();