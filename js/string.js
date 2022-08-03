export default class MyString {
  constructor(string) {
      this.string = string;
      this.valueOf = function() {
        return string.length;
      };
  }

  set string(value) { this._string = value; }
  get string() { return this._string; }
  getString() { return this.string; }
  setString(string) { this.string = string; }
  getStringLength() { return this.string.length; }
  toString() { return this.getString(); }
  toNumber() { return this.getStringLength(); }
}