var http = require('http');
var fs = require('fs');
//Now we have imported both needed modules:

http.createServer(function(req,res){
    //for no chunked data:
    // const text= fs.readFileSync('./testFolder/big.txt','utf8');
    // res.end(text);

    //for chunked data
    var text= fs.createReadStream('./testFolder/big/txt',{encoding:'utf8'});
    text.on('open',()=>{
        console.log('here done');
        //text.pipe(res); //pipe means writing readed chunks of data to something
    })
    text.on('error',(err) => res.end(err));
}).listen(5000,()=>console.log('server running at 5000'));