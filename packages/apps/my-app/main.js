console.log('[main.js] (1) I will now import divideBy');

import('@zwi/divide-by').then(({ divideBy }) => {
  console.log('[main.js] (2) I have imported divideBy');

  exports.main = () => {
    const a = 2;
    const b = 5;

    console.log(`${a} / ${b} is ${divideBy(a, b)}`);
  };
});
