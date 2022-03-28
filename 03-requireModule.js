const self1=require('./02-declareModules');
//here self1 is the exports object of the module that is mentioned inside the require

console.log(self1);
const sayHi = ((name)=>{
    console.log(`hi ${name}`);
})
sayHi(self1.name);