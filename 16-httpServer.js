const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./testFolder/index.html');
const stylePage = readFileSync('./testFolder/style.css');
const logicPage = readFileSync('./testFolder/javascript.js');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    if(req.url==='/style.css'){
        res.writeHead(200,{'content-type': 'text/css'});
        res.write(stylePage);
        res.end();
    }
    if(req.url==='/javascript.js'){
        res.writeHead(200,{'content-type': 'text/javascript'});
        res.write(logicPage);
        res.end();
    }
    

}).listen(5000, ()=> console.log('server up and running on 5000..'))