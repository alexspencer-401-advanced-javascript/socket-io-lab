const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')
const writeFile = require('./file-writer');

socket.on('file-write', data => {
  return writeFile(data.path, data.contents)
    .then(data => {
      socket.emit('file-saved', data)

  })
})
