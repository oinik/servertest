'use strict';

const net = require('node:net')

const HOSTNAME = '';
const PORT = 60101;

net.createServer(socket => {
    //socket.setEncoding('utf8');
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(data.toString());
    });

}).listen({port: PORT, host: HOSTNAME}, () => {
    console.log('Server running...');
});
