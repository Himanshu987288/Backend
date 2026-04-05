const http = require('http');

const testingSyntax=require('./syntax');
const runtime =require('./runtime');
const logical =require('./logical');

const {requestHandler} =require('./handler');

const server=http.createServer((req, res)=>{
    console.log(req.url, req.method);
    //testingSyntax();
    runtime();
});

const PORT= 3003;
server.listen(PORT,()=>{
    console.log('the server running on add http://localhost:${PORT}');
});