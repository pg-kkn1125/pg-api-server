module.exports = class CustomException {
  constructor({ ok, status, message }) {
    this.ok = ok;
    this.status = status;
    this.message = message;
  }
};
