//write all code related to streams
const { createReadStream } = require('fs');

const stream = createReadStream('./testFolder/big.txt',{highWaterMark :90000, encoding: 'utf8'}); //you can give encoding and highwatermark too int the method

stream.on('data',(res)=>{
    console.log(`The length of data in one stream in ${res.length}`);
    console.log(res);
})

stream.on('error',(err)=> console.log(err));