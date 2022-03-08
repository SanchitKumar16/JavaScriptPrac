const net = require('net');
const server = net.createServer(function(sock) {
    console.log('Got connection from (addr, port):', sock.remoteAddress, sock.remotePort);
    
    sock.on('data', function(binaryData) {
        console.log('got data\n=====\n' + binaryData); 
        sock.write(binaryData);
    
        // uncomment me if you want the connection to close
        // immediately after we send back data
        // sock.end();
    });

});
server.listen(8080, '127.0.0.1');