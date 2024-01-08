'use strict';

const net = require('node:net')

const HOSTNAME = '';
const PORT = 10101;

net.createServer(socket => {
    //socket.setEncoding('utf8');
    console.log("Client connected", socket.address());

    // echo
    //socket.write(data);
    socket.pipe(socket);

    socket.on('data', (data) => {
        //console.log(data.toString());
        console.log(`${new Date()} "${data.toString()}"`);
    });

    socket.on('end', () => {
        console.log("Closing connection with the client: ", socket.address());
    });

    socket.on('error', (err) => {
        console.log(`Error: ${err}`);
    });

}).listen({port: PORT, host: HOSTNAME}, () => {
    console.log('Server running...');
});
