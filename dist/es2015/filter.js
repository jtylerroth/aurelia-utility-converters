export let FilterValueConverter = class FilterValueConverter {
  toView(array, property, value) {
    if (!array || !property) {
      return array;
    }
    return array.filter(item => item[property].toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
};