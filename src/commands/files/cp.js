import { pipeline } from 'stream/promises';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import { isFileExisting } from '../../helpers/validators.js';

export const copyFile = async (pathToFile, pathToNewDir) => {
    const fileName = path.basename(pathToFile);
    const newPathToFile = `${pathToNewDir}/${fileName}`;

    const isError = await isFileExisting(newPathToFile) ||
        !await isFileExisting(pathToFile);

    try {
        if (isError) {
            throw Error('Operation failed');
        }

        const readable = createReadStream(pathToFile);
        const writable = createWriteStream(newPathToFile);

        await pipeline(readable, writable);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};