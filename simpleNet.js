const net = require('net');

class Request {
    constructor(s) {
        const requestParts = s.split(' ');
        const path = requestParts[1];
        this.path = path;
    }
}


const server = net.createServer(function(sock) {
    console.log('Got connection from (addr, port):', sock.remoteAddress, sock.remotePort);
    
    // sock.on('data', function(binaryData) {
    //     console.log('got data\n=====\n' + binaryData); 
    //     sock.write(binaryData);
    
    //     // uncomment me if you want the connection to close
    //     // immediately after we send back data
    //     // sock.end();
    // });

    sock.on('data', (binaryData) => {
        const reqString = '' + binaryData; 
        const req = new Request(reqString);
        if(req.path === '/about') {
            sock.write('HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<h2>hello</h2>');
        } else  if(req.path === '/test') {
            sock.write('HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<h2>test</h2>');
        }         
        sock.end();
    });

});
server.listen(8080, '127.0.0.1');