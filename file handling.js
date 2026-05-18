
//sync.....
const fs = require("fs");
// fs.writeFileSync("./test.txt","hey himanshu");


// async....
// fs.writeFile("../test.txt", " hello dhiman ji ", (err) => {});




// sync... start any function call but async always need to a callback function 

// fs.readFile("./contact.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log(result);

//     }

// });

//sync...  rreturn resultbut async.. not return to resulkt only work call back function to detect error and result.
// append file
fs.appendFile("./test.txt", 'hii there i`m himanshu\n', (err) => {
    if(err){
        console.log(err);
    }
});