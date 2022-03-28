const path= require('path');
// console.log(path.sep);
// const filePath = path.join(__dirname,'/desktop','development');
//also can do path.resolve() instead of path.join();

// console.log(filePath);
// console.log(path.basename(filePath));
const filePath= __filename;
const dirPath= __dirname;
console.log(`  ${filePath} and ${dirPath}`);
