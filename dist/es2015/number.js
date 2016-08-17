export let NumberValueConverter = class NumberValueConverter {
  constructor() {
    this.defaultOptions = {
      locale: 'en-US',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    };
  }
  toView(value, options = {}) {
    if (value) {
      return Number(value).toLocaleString(options.locale || this.defaultOptions.locale, {
        maximumFractionDigits: options.maximumFractionDigits || this.defaultOptions.maximumFractionDigits,
        minimumFractionDigits: options.minimumFractionDigits || this.defaultOptions.minimumFractionDigits
      });
    }
  }
};