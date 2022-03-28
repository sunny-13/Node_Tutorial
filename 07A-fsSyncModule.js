const {readFileSync , writeFileSync, writeFile} = require('fs');
const path = require('path');
const beforeText= readFileSync(path.join(__dirname,'testFolder','first.txt'),'utf8');
console.log(beforeText);

writeFileSync(path.join(__dirname,'testFolder','first.txt'),'My name is Sunny Singh',
//{flag:'a'} for appending
)
const afterText= readFileSync(path.join(__dirname,'testFolder','first.txt'),'utf8');
console.log(afterText)

//