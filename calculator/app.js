const http = require('http');
const {requestHandler} =require('./handler');

const server=http.createServer((req, res)=>{
    console.log(req);
});

const PORT= 3003;
server.listen(PORT,()=>{
    console.log('the server running on add http://localhost:${PORT}');
});