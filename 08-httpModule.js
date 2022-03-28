const http = require('http');

const server = http.createServer((req,res)=>{
    //res.write('home page');
    if(req.url=="/"){
        res.end('home page');
    }
    else if(req.url=="/about"){
        res.end('about page');
    }
    else{

        res.end(
            `
            <h1>OOps!</h1>
            <p>Couldn't find what you were looking for!</p>
            <a href="/">Back to home</a>
            `
        )
    }
})

server.listen(5000);