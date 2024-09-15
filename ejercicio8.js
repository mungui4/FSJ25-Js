
/* EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario. */

function crearTabla(){
    const tabla = Number(document.getElementById('tabla').value);
    if(tabla ==''){
        alert("Debe ingresar un número");
    }else{
    const result = document.getElementById('resultado');
    const limiteTabla =10;
    let resultado = '';
    for(let i = 1; i <= limiteTabla; i++){
        resultado += `<p>${i} X ${tabla}= ${i*tabla}</p>`;
    }
    result.innerHTML = resultado;
}
}