import { createReadStream } from 'fs';
import { finished } from 'stream/promises';

export const cat = async (dir) => {
    try {
        const readable = createReadStream(dir);
        let content = '';

        readable.on('data', chunk => content += chunk.toString());
        readable.on('end', () => process.stdout.write(content));

        await finished(readable);
    } catch (err) {
        if (err.code === 'EISDIR' || err.code === 'ENOENT') {
            console.error('Operation failed');
        } else {
            throw new Error(err);
        }
    }
};