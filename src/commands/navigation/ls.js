import fs from 'fs/promises';

export const list = async () => {
    try {
        const content = await fs.readdir(process.cwd(), { withFileTypes: true });
        const contentWithTypes = content.map((file) => ({
            name: file.name,
            type: file.isDirectory() ? 'directory' : 'file',
        }));

        const sortedContentWithTypes = contentWithTypes.sort((file1, file2) => (
            file1.type.localeCompare(file2.type) ||
            file1.name.localeCompare(file2.name)
        ));

        console.table(sortedContentWithTypes);
    } catch (err) {
        throw new Error(err);
    }
}