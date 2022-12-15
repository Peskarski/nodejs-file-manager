import fs, { constants } from 'fs/promises';

export const validateCLI = (command, numberOfArgsGiven) => {
    if (command?.numberOfArgs !== numberOfArgsGiven || !command) {
        throw new Error ('Invalid input');
    }
}

export const isFileExisting = async (path) => {
    try {
        await fs.access(path, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}