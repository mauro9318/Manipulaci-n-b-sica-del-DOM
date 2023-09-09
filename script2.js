//Seleccionammos a los elementos de HTML
const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btncalcular');

const pResult=document.querySelector('#resultado');

//Escuchar los eventos

//evento de escuchar "onclick"

function btnOnClick(){
    
    console.log(input1.value + input2.value); //concatenacion de valores
    let dato1=Number(input1.value);
    let dato2=Number(input2.value);
    let resultado=dato1+dato2;
    console.log(dato1+dato2);

    pResult.innerText ="El resultado es: "+resultado;

    
}