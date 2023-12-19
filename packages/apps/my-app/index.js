const os = require('node:os');
const { main } = require('./main');

console.log(`[index.js] (1) I am running on ${os.machine()}`);

try {
  main();
} catch (e) {
  console.log('[index.js] (2) I have tried to run main and failed');
  console.log();
  console.log(e);
  console.log();
}
