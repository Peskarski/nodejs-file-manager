export const changeDirectory = (dir) => {
    try {
        process.chdir(dir);
    } catch (err) {
        if (err.code = 'ENOENT') {
            console.error('Operation failed');
        } else {
            throw new Error(err);
        }
    }
}