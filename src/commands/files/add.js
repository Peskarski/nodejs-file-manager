import fs from 'fs/promises';;

export const addFile = async (dir) => {
    try {
        await fs.writeFile(dir, '', { flag: 'wx' });
    } catch (err) {
        if (err.code = 'EEXIST') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
};