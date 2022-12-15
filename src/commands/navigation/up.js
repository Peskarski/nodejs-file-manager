import os from 'node:os';

export const goToUpperDirectory = () => {
    if (process.cwd() !== os.homedir()) {
        process.chdir('../');
    }
}