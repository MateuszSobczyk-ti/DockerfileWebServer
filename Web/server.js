var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        let ipClient = req.socket.remoteAddress;
        // set response content    
        res.write('<html><body><p>This is message from nodejs server.</p>' +
        '<p> Your address Ip: ' + ipClient + ', time: ' + new Date + '</body></html>');
        res.end();
    
    }
});

server.listen(8080); //6 - listen for any incoming requests

console.log('Server starting time: ' + new Date);
console.log('Author: Mateusz Sobczyk');
console.log('Node.js web server is running at port: 8080');
