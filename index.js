const textBox=document.getElementById("textBox");
const toFarenheit=document.getElementById("toFarenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;

function convert(){

    if(toFarenheit.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"F";

    }else if(tocelsius.checked){
        temp=Number(textBox.value);
        temp=temp-32*(9/5);
        result.textContent=temp.toFixed(1)+"c";

    }
    else{
        result.textContent="select a unit"
    }
}