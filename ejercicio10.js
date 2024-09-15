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

function html(){
    const manana = Number(document.getElementById('manana').value);
    const tarde = Number(document.getElementById('tarde').value);
    const noche = Number(document.getElementById('noche').value);
    if(manana <= 0 || manana =="" || tarde <= 0 || tarde =="" || noche <= 0 || noche ==""){
        alert("Debe ingresar una cantidad válida de alumnos para cada turno.");
    }else{
        generarInputsHtml(manana, "manana");
        generarInputsHtml(tarde, "tarde");
        generarInputsHtml(noche, "noche");
        crearbtnCalculos(manana, tarde, noche);
    }

}

function conPrompt(){
    const result = document.getElementById('resultado');  
    const manana = Number(document.getElementById('manana').value);
    const tarde = Number(document.getElementById('tarde').value);
    const noche = Number(document.getElementById('noche').value);
    if(manana <= 0 || manana ==="" || tarde <= 0 || tarde ==="" || noche <= 0 || noche ===""){
        alert("Debe ingresar una cantidad válida de alumnos para cada turno.");
    }else{
        let sumaManana  = generarInputsPrompt(manana, "manana");
        let sumaTarde = generarInputsPrompt(tarde, "tarde");
        let sumaNoche = generarInputsPrompt(noche, "noche");
        let promedioManana = 0;
        let promedioTarde = 0;
        let promedioNoche = 0;
        promedioManana = sumaManana/manana;
                        promedioTarde = sumaTarde/tarde;
                        promedioNoche = sumaNoche/noche;
                       
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
    
        result.innerHTML = `<div id="resultado2"><p>Promedio mañana: ${promedioManana}</p><p>Promedio tarde: ${promedioTarde}</p><p>Promedio noche: ${promedioNoche}</p><p>${promedioMayor}</p></div>`
    }
}


function generarInputsHtml (cantidad, turno){  
    const result = document.getElementById('resultado');
    const result2 = document.getElementById('resultado2');
    const resultHtml = document.getElementById(`resultHtml${turno}`);
    let input = '';
    if(result2){
        result2.remove()
    }
    for(let i = 0; i< cantidad; i++){
        input += `<input type="number" min="0" class="form-control my-2" id="inputDato${turno}-${i}" placeholder="Ingrese la edad ${i + 1} ">`;

    }
    if(resultHtml){
        resultHtml.remove();
    }
    result.innerHTML += `<div id="resultHtml${turno}"><p>Turno de la ${turno}</p> ${input}</div>` ;
}


function generarInputsPrompt(cantidad, turno){
    const result = document.getElementById('resultado');
    let sumaTotal = 0;
    for(let i = 0; i< cantidad; i++){
        let notas = parseInt(prompt(`Ingrese el valor ${i + 1} de la ${turno}:`), 10);
        sumaTotal += notas;
    }
 
    return sumaTotal;
}

function calculoMetodoHtml(manana, tarde, noche){
 const result = document.getElementById('resultado');   
    let sumaManana = 0;
    let sumaTarde = 0;
    let sumaNoche = 0;
    let promedioManana = 0;
    let promedioTarde = 0;
    let promedioNoche = 0;
    let promedioMayor = '';
    for (let i = 0; i < manana; i++) {
let valorManana = Number(document.getElementById(`inputDatomanana-${i}`).value);
sumaManana += valorManana;
    }

    for (let i = 0; i < tarde; i++) {
        let valorTarde= Number(document.getElementById(`inputDatotarde-${i}`).value);
        sumaTarde += valorTarde;
            }

            
            for (let i = 0; i < noche; i++) {
                let valorNoche = Number(document.getElementById(`inputDatonoche-${i}`).value);
                sumaNoche += valorNoche;
                    }
                    promedioManana = sumaManana/manana;
                    promedioTarde = sumaTarde/tarde;
                    promedioNoche = sumaNoche/noche;
                   
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

    result.innerHTML = `<div id="resultado2"><p>Promedio mañana: ${promedioManana}</p><p>Promedio tarde: ${promedioTarde}</p><p>Promedio noche: ${promedioNoche}</p><p>${promedioMayor}</p></div>`
}

function calculoPrompt(){
    generarInputsPrompt(manana, "manana");
    generarInputsPrompt(tarde, "tarde");
    generarInputsPrompt(noche, "noche");
}

function crearbtnCalculos(manana, tarde, noche){
    const result = document.getElementById('resultado');  
    const btn = document.getElementById('btnCalcular');  
    if(btn){
        btn.remove();
    }
    
    result.innerHTML += `<button onclick="calculoMetodoHtml(${manana},${tarde},${noche})" style="width: 50%;" id="btnCalcular" class=" btn btn-success my-3">Hacer los cálculos</button>`;
}