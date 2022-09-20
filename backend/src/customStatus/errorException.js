// http status
const HTTP_STATUS = require("./httpStatus");

// error exception
class ErrorException extends HTTP_STATUS {
  constructor({ ok, status, message }) {
    super();
    this.ok = ok;
    this.status = status;
    this.message = message;
  }
}

module.exports = ErrorException;
