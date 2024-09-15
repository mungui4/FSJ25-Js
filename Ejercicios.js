/* JERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un 
mensaje si la persona es mayor de edad o no.Utilizar para la condición el operador ternario. */

let edad =-18;
function mayorEdad(edad){
    
   edad <= 0 ? console.log("No se aceptan edades menores o iguales a cero") : edad >=18 ? console.log("Usted es mayor de edad") : console.log("Usted es menor de edad");
   
   
}
mayorEdad(edad);


/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende 
de lo siguiente: 
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final */

let notaExamen= 5;
let notaTareas= 9;
let notaAsistencia = 5;
let notaInvestigacion = 5;
let nombreAlunmo = "Juan Perezoso";
let carnetAlunmo = "J-125";
function notaFinal (notaExamen, notaTareas, notaAsistencia, notaInvestigacion, nombreAlunmo, carnetAlunmo){

   function validadoraNumeros(numero){
      return numero === "" || numero < 0 || numero > 10;
   }

   function validadoraTexto(texto){
      return texto ==="";
   }

   if(validadoraNumeros(notaExamen) || validadoraNumeros(notaTareas) || validadoraNumeros(notaAsistencia) || validadoraNumeros(notaInvestigacion)){
   return "Datos incorrectos. La nota debe de contener un número entre cero y diez";
      
   }else if(validadoraTexto(nombreAlunmo) || validadoraTexto(carnetAlunmo)){
      return "Se deben ingresar el Nombre y Carnet del alumno";
   }else{
      let notaFinalExamen = notaExamen * 0.20;
      let notaFinalTareas = notaTareas * 0.40;
      let notaFinalAsistencia = notaAsistencia * 0.10;
      let notaFinalInvestigacion = notaInvestigacion * 0.30;
      let promedioFinal = notaFinalExamen + notaFinalTareas + notaFinalAsistencia + notaFinalInvestigacion;
      return `Alumno: ${nombreAlunmo}, Carnet: ${carnetAlunmo}, Nota final: ${promedioFinal}`;
   }
   

}

console.log( notaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion, nombreAlunmo, carnetAlunmo));
console.log( notaFinal(5, 10, 5, 5, "juanito", "J-J-2024"));



/* EJERCICIO 3: 
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y 
aumento. Deberá demostrar los datos del empleado y el aumento salarial */

let nombre = "Juanito";
let salario = 1000;
let categoria = "b";

function aumento(nombre, salario, categoria){
let aumento = 0;
let categoriamod =categoria.toUpperCase();
let descripcionAumento;
if(nombre ==""){
  return "No ha introducido ningun nombre, favor intente de nuevo";
   
} else if(salario <0 || salario ==""){
   return "Su salario no es correcto, debe ser superior a cero";
   
} else if(categoriamod !=="A"  && categoriamod !=="B" && categoriamod !=="C" && categoriamod !=="D"  ){
   return `Categoria "${categoria}" no encontrada, intente de nuevo una categoria válida`;
   
}else{
   switch(categoriamod){
      case "A": aumento = salario * 0.15;
      descripcionAumento ="15%"
      break;
      case "B": aumento = salario * 0.30;
      descripcionAumento ="30%"
      break;
      case "C": aumento = salario * 0.10;
      descripcionAumento ="10%"
      break;
      case "D": aumento = salario * 0.20;
      descripcionAumento ="20%"
      break;
   }
  
} 
return `Empleado: ${nombre}, su aumento es de $${aumento} (${descripcionAumento}). Salario total:$${salario+aumento}`
 
}
console.log(aumento(nombre, salario, categoria));


/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo.  */

let numero1 = 20;
let numero2 = 50;

function numeroMayor(numero1, numero2) {

   function validadoraNumero(numero) {
      return numero !== "" && !isNaN(numero);
   }

   if (![numero1, numero2].every(validadoraNumero)) {
      return "Debe introducir dos números válidos para comparar";
   } else {
      return numero1 == numero2 
         ? `${numero1} es igual a ${numero2}` 
         : numero1 > numero2 
            ? `${numero1} es mayor que ${numero2}` 
            : `${numero2} es mayor que ${numero1}`;
   }
}

console.log(numeroMayor(numero1, numero2));


/* 
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se 
aplicara en base a lo que selecciono el usuario
 */
let compra = 5500;
let coche = "Ford Fiesta"
function descuento(compra, coche){
   let cocheMod = coche.toLowerCase();
   let descuento = 0;
   let seleccion;
   if(compra <= 0 || isNaN(compra) ){
     return "Ingrese una cantidad de compra válida";
      
   }else if(cocheMod !== "ford fiesta" && cocheMod !== "ford focus" && cocheMod !== "ford escape" && cocheMod !== ""){
      return "Favor ingrese un modelo correcto-| Ford Fiesta | Ford Focus | Ford Escape";
      
   } else{
      
      switch(cocheMod){
         case "ford fiesta" : descuento = compra * 0.05;
         seleccion = "Ford Fiesta";
         break;
         case "ford focus" : descuento = compra * 0.10;
         seleccion = "Ford Focus";
         break;
         case "ford escape" : descuento = compra * 0.20;
         seleccion = "Ford Escape";
         break;
   
      }
      let totalAPagar = compra - descuento;
      return `Modelo: "${seleccion}". Descuento: $${descuento}. Total a pagar: $${totalAPagar} `
   }
   
}

console.log(descuento(compra, coche));

/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando 
en cuenta lo siguiente: 
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el 
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino 
es Puerto el Triunfo el descuento será del 15%. */
let costo = 1000;
let origen = "ciudad de palma";
let destino = "puerto el triunfo";
function descuentoViaje(costo, origen, destino){
   let descuento = 0;
   let porcentaje;
   let hacia = "";
   let total = 0;
let origenmod = origen.toLowerCase();
let destinomod = destino.toLowerCase();
if(costo <= 0){
   return "Costo de su viace es incorrecto, favor intentar con un coste mayor a cero";
}
else if(origenmod ==""){
   return "El origen está vacío, favor ingrese un origen"
} else if(destinomod ==""){
   return "El destino está vacío, favor ingrese un destino"
}else if(origenmod !=="ciudad de palma"){
   return `El origen "${origen}" no cuenta con descuentos a ningún destino, intente de nuevo`;
}else if(!destinomod.includes("costa del sol") && !destinomod.includes("costa el sol") && destinomod!=="panchimalco" && !destinomod.includes("puerto el triunfo") && !destinomod.includes("puerto del triufo")){
   return `El destino "${destino}" no cuenta con descuentos.`;
}
else if(origenmod =="ciudad de palma"){
  if(destinomod.includes("costa del sol") || destinomod.includes("costa de el sol")){
   descuento = costo * 0.05;
   porcentaje ="%5";
   hacia = "Costa Del Sol";

  }
  else if(destinomod =="panchimalco"){
   descuento = costo * 0.10;
   porcentaje ="%10";
   hacia = "Panchimalco";
  }
  else if(destinomod.includes("puerto del triunfo") || destinomod.includes("puerto el triunfo")){
   descuento = costo * 0.15;
   porcentaje ="%15";
   hacia = "Puerto El Triunfo";
  }
  total = costo - descuento;
  return `Su viaje desde "Ciudad De Palma" hacia "${hacia}" tiene un descuento de: $${descuento} (${porcentaje}). Total a pagar: $${total}`;
}

}
console.log(descuentoViaje(costo, origen, destino));
 

/* EJERCICIO 7: 
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

const valores = [2,-5,3,2,-4,1,2,7,6,10];
function calculoDiverso(valores){
   let negativos= 0;
   let positivos = 0;
   let multiplos = 0;
   let acumuladoPares =0 ;
   for (let i = 0; i < valores.length; i++) {
      if(valores[i] > 0){
         positivos++;
      }
      if(valores[i] < 0){
         negativos++;
      }
      if(valores[i]%15 === 0){
         multiplos++;
      }
      if(valores[i]%2 === 0){
      acumuladoPares += valores[i];
      }
   }
   return `Positivos: ${positivos} || Negativos: ${negativos} || Multiplos de 3: ${multiplos} || Acumulados Pares: ${acumuladoPares}`;
}
console.log(calculoDiverso(valores));



/* EJERCICIO 8: 
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado 
por el usuario. */

let numero = 50;
function tabla(numero){
   let resultado = "";
   for(let i =1; i<=10; i++){
      resultado += `${i} X ${numero}= ${i*numero}\n`;
   }
   return resultado;
}

console.log(tabla(numero));



/* 
EJERCICIO 9: 
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida */

let temperaturaCelsius = -11;
function temperatura(temperatura){
   let fahrenheit = (9/5)*temperatura +32;
   if(fahrenheit >=14 && fahrenheit <= 32 ){
      return `Temperatura Baja`;
   } 
   else if(fahrenheit >32 && fahrenheit <= 68 ){
      return `Temperatura Adecuada`;
   } 
   else if(fahrenheit >68 && fahrenheit <= 96 ){
      return `Temperatura Alta`;
   } else{
      return `Temperatura Desconocida`
   }
}
console.log(temperatura(temperaturaCelsius));



/* EJERCICIO 10: 
Se cuenta con la siguiente información: 
• Las edades de 5 estudiantes del turno mañana. 
• Las edades de 6 estudiantes del turno tarde. 
• Las edades de 11 estudiantes del turno noche. 
Nota: Las edades de cada estudiante se deberán ingresar por la web. 
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un 
promedio de edades mayor */

let edadesManana = [19,19];
let edadesTarde = [19,19];
let edadesNoche = [18,18];

function estudiantesCalculos(manana, tarde, noche){
   let sumaManana = 0;
   let sumaTarde = 0;
   let sumaNoche = 0;
   let promedioManana = 0;
   let promedioTarde = 0;
   let promedioNoche = 0;
   let promedioMayor = '';
  
   for(let i = 0; i < manana.length; i++){
      sumaManana += manana[i];
   }
   for(let i = 0; i < tarde.length; i++){
      sumaTarde += tarde[i];
   }
   for(let i = 0; i < noche.length; i++){
      sumaNoche += noche[i];
   }
   promedioManana = sumaManana/manana.length;
   promedioTarde = sumaTarde/tarde.length;
   promedioNoche = sumaNoche/noche.length;
   if(promedioManana === promedioTarde && promedioManana > promedioNoche){
      promedioMayor = `Los promedios de Mañana y Tarde son iguales: ${promedioManana}`;
  }else if(promedioManana === promedioNoche && promedioManana > promedioTarde){
      promedioMayor = `Los promedios de Mañana y Noche son iguales: ${promedioManana}`;
  }else if(promedioTarde === promedioNoche && promedioTarde > promedioManana){
      promedioMayor = `Los promedios de Tarde y Noche son iguales: ${promedioTarde}`;
  }else if(promedioManana === promedioTarde && promedioTarde === promedioNoche) {
      promedioMayor = `Los promedios son iguales: ${promedioNoche}`;
  }else if(promedioManana > promedioTarde && promedioManana > promedioNoche){
     promedioMayor = `Promedio mayor: Promedio Mañana: ${promedioManana}`;
  } else if(promedioTarde > promedioNoche){
      promedioMayor = `Promedio mayor: Promedio Tarde: ${promedioTarde}`;
  }else if(promedioNoche > promedioTarde){
      promedioMayor = `Promedio mayor: Promedio Noche: ${promedioNoche}`;
  }

    
   return `-Promedio mañana: ${promedioManana} -Promedio tarde: ${promedioTarde} -Promedio noche: ${promedioNoche} -Promedio mayor "${promedioMayor}"`
   }

console.log(estudiantesCalculos(edadesManana,edadesTarde,edadesNoche));
