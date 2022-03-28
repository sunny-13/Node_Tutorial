const util = require('util');
const { readFile } = require('fs');
const readFilePromise = util.promisify(readFile);

const readNow = async() =>{
    try {
        const text= await readFilePromise('./testFolder/first.txt','utf8');
        console.log(text);
        
    } catch (error) {
        console.log(error);
    }

}

readNow();