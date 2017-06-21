define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let LimitValueConverter = exports.LimitValueConverter = class LimitValueConverter {
    toView(array, amount) {
      if (array) {
        return array.slice(0, amount);
      }
    }
  };
});