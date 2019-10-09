const fs = require('fs').promises;

function readFile(file) {
  fs.readFile(file, { encoding: 'utf8'})
    .then(contents => {
      console.log(contents);
    })
  } 

readFile(process.argv[2])

module.exports = readFile;