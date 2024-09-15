/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%. */

function descuentoTuristico(){
    const valorViaje = Number(document.getElementById("valorViaje").value);
    const origen = document.getElementById('select-origen').selectedOptions[0].text;
    const destino = document.getElementById('select-destino').selectedOptions[0].text;
    let mensaje = '';
    let descuento = 0;
    let total = 0;

    if(isNaN(valorViaje) || valorViaje <=0 ){
        mensaje = 'Debe introducir un valor mayor a cero'
    }
    else if(origen ==='Selecciona un Origen'){
        mensaje = 'Seleccione un  origen válido';
    } else if(destino === 'Selecciona un Destino'){
        mensaje = 'Seleccione un  destino válido';
    } else if(origen === 'Ciudad de Palma'){
        if(destino === 'Costa del sol'){
            descuento = valorViaje * 0.05;
        }else if(destino === 'Panchimalco'){
            descuento = valorViaje * 0.10;
        }else if(destino === 'Puerto el triunfo'){
            descuento = valorViaje * 0.15;
        }  
        total = valorViaje - descuento;
        mensaje = `
             <p>Origen: ${origen}</p>
             <p>Destino: ${destino}</p>
             <p>Descuento aplicado: $${descuento.toFixed(2)}</p>
             <p>Total con descuento: $${total.toFixed(2)}</p>
         `;

    }else if(origen === 'Otro'){
        mensaje = `No hay descuentos desde "${origen}" hasta "${destino}."`;
       }
       let respuesta = document.getElementById("resultado");
       if(!respuesta){
        respuesta =document.createElement('div');
        respuesta.id = 'resultado';
        document.getElementById("contenedor").appendChild(respuesta);
       }
respuesta.innerHTML = mensaje;

}