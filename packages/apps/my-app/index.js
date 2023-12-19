const { divideBy } = require('@zwi/divide-by');

try {
  console.log('I am going to destroy the world!!');
  console.log(`\x1b[36m1/0 = ${divideBy(1, 0)}\x1b[0m`);
} catch (e) {
  console.error('\x1b[31mI have failed to destroy the world :(\x1b[0m');
}
