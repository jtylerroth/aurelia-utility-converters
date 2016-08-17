"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrencyValueConverter = exports.CurrencyValueConverter = function () {
  function CurrencyValueConverter() {
    _classCallCheck(this, CurrencyValueConverter);

    this.defaultOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      locale: 'en-US',
      currency: "USD",
      currencyDisplay: "symbol"
    };
  }

  CurrencyValueConverter.prototype.toView = function toView(value) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (value) {
      return Number(value).toLocaleString(options.locale || this.defaultOptions.locale, {
        maximumFractionDigits: options.maximumFractionDigits || this.defaultOptions.maximumFractionDigits,
        minimumFractionDigits: options.minimumFractionDigits || this.defaultOptions.minimumFractionDigits,
        style: "currency",
        currency: options.currency || this.defaultOptions.currency,
        currencyDisplay: options.currencyDisplay || this.defaultOptions.currencyDisplay
      });
    }
  };

  return CurrencyValueConverter;
}();