const { divideBy: privateDivideBy } = require('./divide-by');

/**
 * Returns the result of dividing two numbers.
 *
 * @param {number} a - The numerator.
 * @param {number} b - The denominator (should not be zero).
 * @returns {number} The result of a divided by b.
 * @throws {Error} Throws an error if the denominator (b) is zero.
 */
function divideBy(a, b) {
  if (b === 0) {
    throw new Error('Denominator cannot be zero.');
  }

  return privateDivideBy(a, b);
}

exports.divideBy = divideBy;
