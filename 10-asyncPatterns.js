const {readFile} = require('fs');

const getText = (path)=> {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })  
}

getText('./testFolder/first.txt')
.then((success) => console.log(success))
.catch((err) => console.log(err));
