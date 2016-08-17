export class SortValueConverter {
  toView(array, property, sortAsc = true) {
    if (!array) {
      return;
    }
    if (!property) {
      return array;
    }
    array.sort((a, b) => {
      if (a[property] < b[property]) {
        return sortAsc ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return sortAsc ? 1 : -1;
      }
      return 0;
    });
    return array;
  }
}

