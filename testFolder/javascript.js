const text= document.getElementById('num');
const butn=document.getElementById('btn');

let flag=false;
butn.addEventListener('click',()=>{
    console.log('Clicked');
    flag= !flag;
    if(flag){

        text.innerHTML = "clicked";
    }
    else{
        text.innerHTML = "unclicked";

    }
})