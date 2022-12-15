import fs, { constants } from 'fs/promises';
import path from 'path';
import { isFileExisting } from '../../helpers/validators.js';

export const rename = async (pathToFile, newName) => {
    const dirname = path.dirname(pathToFile);
    try {
        if (await isFileExisting(`${dirname}/${newName}`)) {
            throw new Error('Operation failed');
        }

        await fs.rename(pathToFile, `${dirname}/${newName}`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Operation failed');
        } else {
            console.error(err.message);
        }
    }
};