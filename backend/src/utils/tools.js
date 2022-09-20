/**
 * @param {object} object
 */
const isEmpty = (object) =>
  (object instanceof Array ? object.length : Object.keys(object).length) === 0;

module.exports = { isEmpty };
