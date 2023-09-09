function imprimirPrimerElemento(array){
    console.log(array[0])
}
array=["Juan","Rigoberto","Nancy"];
imprimirPrimerElemento(array)


function imprimir2(arr){
    for (let i=0; i<=arr.length; i++){
        console.log(arr[i])

    }
}

imprimir2(["Juan","Rigoberto","Nancy","PEPE","Luis","Crlos"])



obj1={
    nombre:'Fulanito',
    edad:3,
    Comida:['Pollo Frito','lechuga','Zanahoria']
}

Object.values(obj1)

function imprimirObj(arr){
    let arr=Object.values(obj1)
    for (let i=0; i<=arr.length; i++){
        console.log(arr[i])

    }
}

imprimir2(["Juan","Rigoberto","Nancy","PEPE","Luis","Crlos"])
