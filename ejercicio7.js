/* EJERCICIO 7: 
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares. */

function ingresarDatos() {
    const cantidadDigitos = Number(document.getElementById('cantDigitos').value);
    const metodo = document.getElementById('preferDigitos').selectedOptions[0].text;
    if(cantidadDigitos =='' || metodo ==='Seleccione una forma'){
        alert("Debe ingresar cuantos digitos desea evaluar y seleccionar una forma.");
    }else{
    if (metodo === 'Con el método Prompt') {
        metodoprompt(cantidadDigitos);
    }

    if (metodo === 'Con equiquetas HTML') {
       metodoHtml(cantidadDigitos);
    
         
    }

    }
}

function metodoprompt(cantDigitos) {
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let acumuladoPares = 0;
    let valor = 0;
    for (let i = 0; i < cantDigitos; i++) {

        valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`), 10);
        if (valor > 0) {
            positivos++;
        }
        if (valor < 0) {
            negativos++;
        }
        if (valor % 15 === 0) {
            multiplos15++;
        }
        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }


    }
    impresionResultados(positivos, negativos, multiplos15, acumuladoPares);
}

function metodoHtml(cantDigitos) {
   
    const result = document.getElementById('resultados');

    let acumuladorInputs = '';
    for (let i = 0; i < cantDigitos; i++) {
        acumuladorInputs += `<input type="number" class="form-control my-2" id="inputDato${i}" placeholder="Ingrese el número ${i + 1} ">`;

    }

    result.innerHTML = acumuladorInputs + `<button onclick="calculoMetodoHtml(${cantDigitos})" style="width: 50%;" id="btnCalcular" class=" btn btn-success my-3">Hacer los cálculos</button>`;
}

function calculoMetodoHtml(cantDigitos){
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let acumuladoPares = 0;

    for (let i = 0; i < cantDigitos; i++) {
let valor = Number(document.getElementById(`inputDato${i}`).value);
        if (valor > 0) {
            positivos++;
        }
        if (valor < 0) {
            negativos++;
        }
        if (valor % 15 === 0) {
            multiplos15++;
        }
        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }


    }
    impresionResultados(positivos, negativos, multiplos15, acumuladoPares);
}

function eliminarBtn() {
    const boton = document.getElementById('btnIngresar');
    boton.remove();
}

function impresionResultados(positivos, negativos, multiplos15, acumuladoPares){
    const result = document.getElementById('resultados');
    const result2 = document.getElementById('resultado2');
    if(result2){result2.remove();}
    
    
    result.innerHTML += `<div class="mt-3" id="resultado2"><p>Cantidad de números Positivos: ${positivos}</p>
            <p>Cantidad de números Negativos: ${negativos}</p>
            <p>Cantidad de números múltiplos de 15: ${multiplos15}</p>
            <p>Suma de Pares: ${acumuladoPares}</p></div>`;
}