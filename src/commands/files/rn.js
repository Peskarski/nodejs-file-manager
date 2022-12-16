import fs, { constants } from 'fs/promises';
import path from 'path';
import { isFileExisting } from '../../helpers/validators.js';

export const rename = async (pathToFile, newName) => {
    const dirname = path.dirname(pathToFile);
    try {
        if (await isFileExisting(`${dirname}/${newName}`)) {
            throw Error('Operation failed');
        }

        await fs.rename(pathToFile, `${dirname}/${newName}`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};