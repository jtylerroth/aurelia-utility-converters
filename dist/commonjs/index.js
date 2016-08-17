'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
function configure(config) {
  config.globalResources(['./currency', './filter', './json', './limit', './md5', './number', './sort']);
}