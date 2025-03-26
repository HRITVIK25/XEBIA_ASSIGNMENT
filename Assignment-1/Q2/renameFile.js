const fs = require('fs');

const oldFileName = 'old.txt';
const newFileName = 'new.txt';

fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log(`File renamed successfully from ${oldFileName} to ${newFileName}`);
  }
});
