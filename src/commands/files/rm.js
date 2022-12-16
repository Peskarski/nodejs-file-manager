import fs from 'fs/promises';

export const removeFile = async (path) => {
    try {
        await fs.unlink(path);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};