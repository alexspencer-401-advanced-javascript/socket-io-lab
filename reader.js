const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890)')
const fs = require('fs').promises;
const { readFile } = require('./file-reader');

socket.emit('file-read', readFile(process.argv[2]))

