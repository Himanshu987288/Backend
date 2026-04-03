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
//it's use of chunk ,because chunk is a small parts of any big parts
const body =[];
req.on('data',chunk =>{
    console.log(chunk);
    body.push(chunk);
});
req.on('end',()=>{// chunk gives end signal
    const parseBody= Buffer.concat(body).toString();//give final data
    console.log(fullBody);
    const parms=URLSearchParams(fullBody);
    const bodyObject={};
    for(const[key,val] of parms.entries()){
        bodyObject[key]=val;
    }
    console.log(bodyObject);

})
const PORT=3002;//localhost:3002 --->it's a server of model and localhost add can be diff-2
server.listen(PORT,()=>{
    console.log('server runing on address http://localhost:${PORT}')

});

