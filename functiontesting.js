const {readFile} = require('fs');


const getText = (path)=> {
    return new Promise ((resolve,reject)=>{
        readFile(path,'utf8',(err,res)=>{
            if(err) rejects(err);
            else resolve(res)
        }) 
    })
}




const text= async() =>{
    const file= await getText('./testFolder/first.txt');
    console.log(file);
    console.log('is it working?')
}

text();