const http = require('http')
//create a server
const server= http.createServer((req, res)=>{
    console.log(req.url, req.method,req.headers);
    //process.exit();------->stop server

    if(req.url === '/'){
    res.setHeader('Content-Type',  'text/html');
    res.write('<html>');
    res.write('<head><title>ComplateCoding</title></head>');
    res.write('body><h1>welcome to home</h1></body>')
    res.write('</html>');
    res.end();
    return;
    

    }
    else if(req.url === '/products'){

    res.setHeader('Content-Type',  'text/html');
    res.write('<html>');
    res.write('<head><title>ComplateCoding</title></head>');
    res.write('body><h1>checkout</h1></body>')
    res.write('</html>');
    res.end();//if one time use of end than in server outcomes to a error because we are not use all condition  
    return;

    }

    res.setHeader('Content-Type',  'text/html');
    res.write('<html>');
    res.write('<head><title>ComplateCoding</title></head>');
    res.write('body><h1>Like / share/ follow </h1></body>')
    res.write('</html>');
    res.end();

    
});
const PORT=3002;
server.listen(PORT,()=>{
    console.log('server runing on address http://localhost:${PORT}')

});//server call------>localhost as 3002,3003.....