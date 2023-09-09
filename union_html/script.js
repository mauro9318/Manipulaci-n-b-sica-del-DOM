console.log("HOLA MUNDO");

//leer htmldesd js

const h1=document.querySelector('h1')//seleccionamos por nombre de la etiquieta
const p=document.querySelector('p');
const parrafito=document.querySelector('.parrafito');
const pid=document.querySelector('#pid');
const input=document.querySelector('input')


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,

});

h1.innerHTML = 'PATITOS';//modifica el texto, lo interpreta como html
h1.innerText//modifica el texxto, lo interpreta como texto plano
document.createElement('img')//crea un eleemento html