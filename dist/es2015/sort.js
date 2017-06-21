define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  let SortValueConverter = exports.SortValueConverter = class SortValueConverter {
    toView(array, property, sortAsc = true) {
      if (!array) {
        return;
      }
      if (!property) {
        return array;
      }
      array.sort((a, b) => {

        let aProp;
        let bProp;
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
    }
  };
});