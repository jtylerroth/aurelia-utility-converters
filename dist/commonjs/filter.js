"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterValueConverter = exports.FilterValueConverter = function () {
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
}();