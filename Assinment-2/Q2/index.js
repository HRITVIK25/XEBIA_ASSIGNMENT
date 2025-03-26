const fs = require('fs');
const { Transform } = require('stream');

const inputFilePath = 'Assinment-1/Q2/input.txt';
const outputFilePath = 'Assinment-1/Q2/output.txt';

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

const readStream = fs.createReadStream(inputFilePath, 'utf8');
const writeStream = fs.createWriteStream(outputFilePath, 'utf8');

readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File transformed to uppercase successfully!');
});
