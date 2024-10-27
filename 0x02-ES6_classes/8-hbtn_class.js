export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method to cast to a Number
  valueOf() {
    return this._size;
  }

  // Method to cast to a String
  toString() {
    return this._location;
  }
}
