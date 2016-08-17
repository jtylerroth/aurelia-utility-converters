export let JsonValueConverter = class JsonValueConverter {
  toView(value) {
    return JSON.stringify(value, null, '\t');
  }
};