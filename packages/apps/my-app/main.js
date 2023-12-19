import('@zwi/divide-by').then(({ divideBy }) => {
  exports.main = () => {
    const a = 2;
    const b = 5;

    console.log(`${a} / ${b} is ${divideBy(a, b)}`);
  };
});
