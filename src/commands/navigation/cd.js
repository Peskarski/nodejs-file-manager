export const changeDirectory = (dir) => {
    try {
        process.chdir(dir);
    } catch (err) {
        if (err.code = 'ENOENT') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }
}