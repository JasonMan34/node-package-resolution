const os = require('node:os');
const { main } = require('./main');

console.log(`I am running on ${os.machine()}`);

main();
