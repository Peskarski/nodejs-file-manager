import { createHash } from 'node:crypto';
import fs from 'fs/promises';

export const calculateHash = async (path) => {
    try {
        const content = await fs.readFile(path);
        const hash = createHash('sha256').update(content).digest('hex');
        console.log(hash);
    } catch (err) {
        if (err.code = 'EEXIST') {
            throw Error('Operation failed');
        }
        throw new Error(err);
    }

};