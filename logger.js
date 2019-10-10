const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890')

socket.on('file-read', contents => {
  console.log(`File read, with ${contents}`)
});

socket.on('file-write', contents => {
  console.log(`File with ${contents} has been written`)
});

socket.on('file-saved', () => {
  console.log('File saved')
})