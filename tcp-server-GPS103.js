/*
 * Copyright 2024 Jorge Toro Hoyos (jolthgs@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const net = require('node:net');

const HOSTNAME = '';
const PORT = 10101;

net.createServer(socket => {
    //socket.setEncoding('utf8');
    socket.setTimeout(180000); // 3 minutes of inactivity 
    console.log("Client connected", socket.address());

    // echo
    //socket.write(data);
    socket.pipe(socket);

    socket.on('data', (chunk) => {
        console.log(`${new Date()} [${chunk.length}] "${chunk.toString()}"`);
    });

    socket.on('end', () => {
        console.log("Closing connection with the client: ", socket.address());
    });

    socket.on('error', (err) => {
        console.log(`Error: ${err}`);
    });

    socket.on('timeout', () => {
        console.log('socket timeout');
        socket.end();
    })

}).listen({port: PORT, host: HOSTNAME}, () => {
    console.log(`${new Date()} :: server ready and listening on port ${PORT}`);
});
