export let CurrencyValueConverter = class CurrencyValueConverter {
  constructor() {
    this.defaultOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      locale: 'en-US',
      currency: "USD",
      currencyDisplay: "symbol"
    };
  }

  toView(value, options = {}) {
    if (value) {
      return Number(value).toLocaleString(options.locale || this.defaultOptions.locale, {
        maximumFractionDigits: options.maximumFractionDigits || this.defaultOptions.maximumFractionDigits,
        minimumFractionDigits: options.minimumFractionDigits || this.defaultOptions.minimumFractionDigits,
        style: "currency",
        currency: options.currency || this.defaultOptions.currency,
        currencyDisplay: options.currencyDisplay || this.defaultOptions.currencyDisplay
      });
    }
  }
};