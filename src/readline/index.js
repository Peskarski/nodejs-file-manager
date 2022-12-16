import { createInterface } from 'readline/promises';
import { directionMessage } from '../helpers/messages.js';
import {
    changeDirectory,
    goToUpperDirectory,
    list,
    cat,
    addFile,
    rename,
    copyFile,
    moveFile,
    removeFile,
    executeOSCommand,
    calculateHash,
    compress,
    decompress,
} from '../commands/index.js';
import { commands } from '../helpers/constants.js';
import { validateCLI } from '../helpers/validators.js';

export const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Please, enter your command\n'
});

export const readline = () => {
    rl.prompt();
    rl.on('line', async (line) => {
        const [command, ...values] = line.toString().trim().replace(/ +/, ' ').split(' ');
        try {
            validateCLI(commands[command], values.length);

            switch (command) {
                case commands.cd.name: {
                    changeDirectory(values[0]);
                    break;
                }
                case commands.up.name: {
                    goToUpperDirectory();
                    break;
                }
                case commands.ls.name: {
                    await list();
                    break;
                }
                case commands.cat.name: {
                    await cat(values[0]);
                    break;
                }
                case commands.add.name: {
                    await addFile(values[0]);
                    break;
                }
                case commands.rn.name: {
                    await rename(...values);
                    break;
                }
                case commands.cp.name: {
                    await copyFile(...values);
                    break;
                }
                case commands.mv.name: {
                    await moveFile(...values);
                    break;
                }
                case commands.rm.name: {
                    await removeFile(values[0]);
                    break;
                }
                case commands.os.name: {
                    executeOSCommand(values[0]);
                    break;
                }
                case commands.hash.name: {
                    await calculateHash(values[0]);
                    break;
                }
                case commands.compress.name: {
                    await compress(...values);
                    break;
                }
                case commands.decompress.name: {
                    await decompress(...values);
                    break;
                }
                case '.exit': {
                    process.exit();
                }
            }
        } catch (err) {
            console.error(err.message);
        }

        console.log(directionMessage(process.cwd()));
        rl.prompt();
    });
}