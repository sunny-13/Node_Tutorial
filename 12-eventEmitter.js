const eventEmitter = require('events');
const http = require('http'); //can use eventemitter on https too!!
const event = new eventEmitter();

event.on('fired',(name,time)=>{
    console.log(`event is fired by ${name} at time ${time}`);
})

event.emit('fired','sunny','11:20');

const server = http.createServer((req,res)=>{

}).listen(5000,()=> console.log('server running on 5000..'));

server.on('request',(req,res)=>{
    if(req.url==='/'){
        res.end('home page');
    }
})