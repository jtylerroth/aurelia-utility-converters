'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
  }

  _export('configure', configure);

  return {
    setters: [],
    execute: function () {}
  };
});