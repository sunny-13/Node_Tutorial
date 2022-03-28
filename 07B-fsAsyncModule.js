const {readFile , writeFile} = require('fs');

readFile('./testFolder/first.txt','utf8',
    //This is the callBAck function:
    //also if number of callbacks increase, it becomes callback hell;
    (err,result)=>{
        if(err) { console.log(err); return; }
        const fileText=result;
        console.log(result);
        writeFile('./testFolder/duplicate.txt',fileText,(err,result)=>{
            if(err) { console.log(err); return; }
            console.log('success');
        })
    }
)