System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      define(['exports'], function (exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.configure = configure;
        function configure(config) {
          config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
        }
      });
    }
  };
});