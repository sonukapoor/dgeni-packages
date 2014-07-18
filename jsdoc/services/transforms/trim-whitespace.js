var _ = require('lodash');

/**
 * Trim excess whitespace from the value
 */
module.exports = function trimWhiteSpaceTransform(doc, tag, value) {
  if ( _.isString(value) ) {
    return value.trim();
  }
  return value;
};