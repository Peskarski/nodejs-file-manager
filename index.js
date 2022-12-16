import os from 'node:os';
import start from './src/scripts/start.js';
import { readline } from './src/readline/index.js';

const homeDirectory = os.homedir();
process.chdir(homeDirectory);

start();
readline();