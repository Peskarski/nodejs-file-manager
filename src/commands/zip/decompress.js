import { createWriteStream, createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream/promises';
import { isFileExisting } from '../../helpers/validators.js';

export const decompress = async (pathToFile, pathToDecompressedFile) => {
    const decompressedFileDirname = path.dirname(pathToDecompressedFile);

    const isError = !await isFileExisting(pathToFile) ||
        !await isFileExisting(decompressedFileDirname);

    if (isError) {
        throw Error('Operation failed');
    }

    try {
        const readable = createReadStream(pathToFile);
        const writable = createWriteStream(pathToDecompressedFile, { flags: 'wx' });

        await pipeline(readable, createGunzip(), writable);
    } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'EEXIST') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};