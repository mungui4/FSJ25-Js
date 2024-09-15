/* 
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario
 */
function descuentoVehiculo() {
    const valorCompra = Number(document.getElementById("valorCompra").value);
    const leerModelo = document.getElementById("select").selectedOptions[0].text;
    let mensaje = '';


    if (isNaN(valorCompra) || valorCompra <= 0) {
        mensaje = `<p>Por favor, ingresa un monto de compra mayor a cero.</p>`;
    }
    else if(leerModelo ==='Selecciona un Modelo'){
        mensaje = "Favor seleccione un modelo"
    } else {
        let descuento = 0;
        if (leerModelo === "Ford Fiesta") {
            descuento = valorCompra * 0.05; 
        } else if (leerModelo === "Ford Focus") {
            descuento = valorCompra * 0.10;
        } else if (leerModelo === "Ford Scape") {
            descuento = valorCompra * 0.20; 
        }

        const total = valorCompra - descuento;
        mensaje = `
            <p>Vehículo seleccionado: ${leerModelo}</p>
            <p>Monto de la compra: $${valorCompra.toFixed(2)}</p>
            <p>Descuento aplicado: $${descuento.toFixed(2)}</p>
            <p>Total con descuento: $${total.toFixed(2)}</p>
        `;
    }
    let respuesta = document.getElementById("resultado");
    if (!respuesta) {
        respuesta = document.createElement('div');
        respuesta.id = "resultado";
        document.getElementById("contenedor").appendChild(respuesta);
    }
    respuesta.innerHTML = mensaje;
}