const {readFile} = require('fs');

const getText = async(path)=> {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err) reject(err);
            else resolve(data);
        })
    })  
}


const getFile =async ()=>{
    try {
        const text= await getText('./testFolder/first.txt');
        console.log(text);
    } catch (error) {
        console.log(error);
    }
    // const text= await getText('./testFolder/frst.txt');
    // console.log(text);
    
} 

getFile();
