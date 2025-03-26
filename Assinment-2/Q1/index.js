const fs = require('fs');

const filePath = './hello.txt';
const content = 'Hello, World!';

fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File written successfully!');
    }
});