//Calculadora
$("#calculadora").on('click', function Calculadora(){

//Solicitar números a usuario
let num1 = (prompt("Ingrese el primer número. Debe ser mayor a 0",));
        
let num2 = (prompt("Ingrese el segundo número. Debe ser distinto al primero y mayor a 0"));

//Texto a número
num1 = parseInt(num1);
num2 = parseInt(num2);

//Operaciones
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;
let resultadoDivision = num1 / num2
let resultadoModulo = num1 % num2;

//Resultado
 $("#resultado").html(`
La suma de ${num1} más ${num2} es ${resultadoSuma}.
La resta de ${num1} menos ${num2} es ${resultadoResta}.
La multiplicación de ${num1} por ${num2} es ${resultadoMultiplicacion}.
La división de ${num1} por ${num2} es ${resultadoDivision}.
El módulo de ${num1} dividido por ${num2} es ${resultadoModulo}.
    `);
});

//Temperatura
$("#temperatura").on('click', function(){

// Solicitar a usuario datos de temperatura
    let num1 = (prompt("Ingrese la temperatura que desea convertir"));
    num1 = parseInt(num1);

//Transformación de Celsius a Kelvin y Farenheit
    let resultadoKelvin = num1 + 273.15;
    let resultadoFarenheit = (num1 * (9/5)) + 32 ;

    //Resultado
    $("#resultado").html(`
         ${num1} grados Celsius son  ${resultadoKelvin} grados Kelvin.
         ${num1} grados Celsius son ${resultadoFarenheit} grados Farenheit.
    `);
});

//Tiempo
$("#tiempo").on('click', function(){

// Solicitar a usuario el número de días a calcular
    let dia =(prompt("Ingrese el número de días que desee"));
    dia = parseInt(dia);
   
// Calcular
let resultadoSemanas = Math.round(dia) / 7
let resultadoAños= Math.round(dia) / 365

 //Resultado
 $("#resultado").html(`
 ${dia} día/s, en semanas, corresponde a  ${resultadoSemanas} semanas.
 ${dia} día/s, en años, corresponde a  ${resultadoAños} año/s.
`);
});

//Sumar y promediar
$("#promedio").on('click', function(){

//Solicitar números a usario
let num1 =(prompt("Ingrese primer número"));
let num2 =(prompt("Ingrese segundo número"));
let num3 =(prompt("Ingrese tercer número"));
let num4 =(prompt("Ingrese cuarto número"));
let num5 =(prompt("Ingrese quinto número"));

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
num4 = parseInt(num4)
num5 = parseInt(num5)

//Calcular suma y promedio
let resultadoSuma = num1 + num2 + num3 + num4 + num5
let resultadoPromedio = (resultadoSuma)/ 5
  
// Resultado
$("#resultado").html(`
    La suma de los números es ${resultadoSuma} y su promedio es de ${resultadoPromedio}.
    `);
});

