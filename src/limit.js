export class LimitValueConverter {
  toView(array, amount) {
    if (array) {
      return array.slice(0, amount);
    }
  }
}

