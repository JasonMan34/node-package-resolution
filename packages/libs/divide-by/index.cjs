const process = require('node:process');

console.log(`[${process.cwd().split('/').slice(-1)}] - This log is from the .cjs file\n`);

/**
 * Returns the result of dividing two numbers.
 *
 * @param {number} a - The numerator.
 * @param {number} b - The denominator (should not be zero).
 * @returns {number} The result of a divided by b.
 * @throws {Error} Throws an error if the denominator (b) is zero.
 */
exports.divideBy = (a, b) => {
  if (b === 0) {
    throw new Error('Denominator cannot be zero.');
  }

  return a / b;
};
