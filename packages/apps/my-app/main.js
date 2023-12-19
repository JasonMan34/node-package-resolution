const { divideBy } = require('@zwi/divide-by');

exports.main = () => {
  const a = 2;
  const b = 5;

  console.log(`${a} / ${b} is ${divideBy(a, b)}`);
};
