import os from 'node:os';
import { main } from './main.js';

console.log(`I am running on ${os.machine()}`);
main();