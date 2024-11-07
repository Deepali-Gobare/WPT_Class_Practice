const http =require('http');
const  server  = http.createServer((req,res)=>{
    res.write("Hello world");
    res.write("congrulation.....server hua haii!!!!");
    res.end();
});
server.listen(4700);