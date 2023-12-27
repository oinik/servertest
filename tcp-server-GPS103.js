'use strict';

const net = require('node:net')

const HOSTNAME = '';
const PORT = 60101;

net.createServer(socket => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(data);
    });
}).listen({port: PORT, host: HOSTNAME}, () => {
    console.log('Server running...');
});
