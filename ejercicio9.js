const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/* 
EJERCICIO 9: 
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida */

function temperatura (){
    const temperatura = Number(document.getElementById('temperatura').value);
    if(temperatura ==''){
      alert("Debe ingresar una valor para temperatura.");
  }else{
    const resultado = document.getElementById('resultado');
    let conversion = 0;
    conversion = (9/5)*temperatura +32;
    let result = '';
    if(conversion >=14 && conversion <= 32 ){
        result = `"${conversion.toFixed(2)}-F" Temperatura Baja`;
     } 
     else if(conversion >32 && conversion <= 68 ){
        result = `"${conversion.toFixed(2)}-F" Temperatura Adecuada`;
     } 
     else if(conversion >68 && conversion <= 96 ){
        result = `"${conversion.toFixed(2)}-F" Temperatura Alta`;
     } else{
        result = `"${conversion.toFixed(2)}-F" Temperatura Desconocida`
     }
resultado.innerHTML = result;
}

}