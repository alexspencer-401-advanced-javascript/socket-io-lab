const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')
const readFile = require('./file-reader');

return readFile(process.argv[2])
  .then(contents => {
    socket.emit('file-read', { contents: contents, path: process.argv[2] })
  })
  .catch((error) => {
    socket.emit('file-error', error)
  });

