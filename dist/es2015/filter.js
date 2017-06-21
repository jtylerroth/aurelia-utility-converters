define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let FilterValueConverter = exports.FilterValueConverter = class FilterValueConverter {
    toView(array, property, value) {
      if (!array || !property || !value) {
        return array;
      }
      return array.filter(item => item[property].toString().toLowerCase().indexOf(value.toString().toLowerCase()) > -1);
    }
  };
});