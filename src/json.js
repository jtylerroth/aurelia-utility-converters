export class JsonValueConverter {
  toView(value) {
    if (value) {
      return JSON.stringify(value, null, '\t')
    }
  }
}
