function ConseguirTipoSuscripcion(suscripcion){
    if(suscripcion=='Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return; //Para finalizar la funcion
    }
    if(suscripcion=='Expert'){
        console.log("Puedes tomar casi todos los cursos");
        return; //Para finalizar la funcion

    }

    if (suscripcion=='ExpertDuo'){
        console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi por un año")
        return; //Para finalizar la funcion
    }

    else{
        console.warn('Ese tipo de suscripcion no existe')
    }
}



const tiposDeSuscripciones={
    free:"Solo puedes tomar los cursos gratis",
    basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    expertDuo:"Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año"
}

tiposDeSuscripciones.free
tiposDeSuscripciones['free']


var sus=free
tiposDeSuscripciones[sus]



function ConseguirTipoSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
        return
    }
    console.warn("Este tipo de suscripcion no existe")

}