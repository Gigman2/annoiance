import fs from 'fs';
import path from 'path';
import localFont from 'next/font/local'


export const checkFileExists = (filePath: string) => {
    const fullPath = path.join(process.cwd(), filePath);
    return fs.existsSync(fullPath);
};

