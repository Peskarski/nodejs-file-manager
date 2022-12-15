import fs from 'fs/promises';;

export const addFile = async (dir) => {
    try {
        await fs.writeFile(dir, '', { flag: 'wx' });
    } catch (err) {
        if (err.code = 'EEXIST') {
            console.error('Operation failed');
        } else {
            console.error(err);
        }
    }
};