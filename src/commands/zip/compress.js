import { createWriteStream, createReadStream } from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';
import path from 'path';
import { isFileExisting } from '../../helpers/validators.js';

export const compress = async (pathToFile, pathToCompressedFile) => {
    const copmressedFileDirname = path.dirname(pathToCompressedFile);

    const isError = !await isFileExisting(pathToFile) ||
        !await isFileExisting(copmressedFileDirname)

    if (isError) {
        throw Error('Operation failed');
    }

    try {
        const readable = createReadStream(pathToFile);
        const writable = createWriteStream(pathToCompressedFile, { flags: 'wx' });
        const brotliCompress = zlib.createBrotliCompress();

        await pipeline(readable, brotliCompress, writable);
    } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'EEXIST') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};