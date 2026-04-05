
module.exports=requestHandler;
//simple node server
const http = require('http');
const userrRequestHandler =require('./first_server');
const server= Http.createServer(userRequestHandler);
const PORT= 3002;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost${PORT}`)
});

//we are start on module.js within start first_server.js bcz request handler call of new file

//module in node:-bscly use of module in diff diff file and small module code as---->1.js(header)2.js(const=somethings)3.js =(conditions)