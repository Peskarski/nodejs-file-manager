import os from 'node:os';
import start from './scripts/start.js';
import { readline } from './readline/index.js';

const homeDirectory = os.homedir();
process.chdir(homeDirectory);

start();
readline();