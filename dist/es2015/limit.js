export let LimitValueConverter = class LimitValueConverter {
  toView(array, amount) {
    return array.slice(0, amount);
  }
};