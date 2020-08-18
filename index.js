//REPASO ABD JAVAScript

// Numeros: 
//1, 2, 3

// Strings (Cadenas de texto)
// "Hola"
// 'Hola'
// `Hola``

// Booleanos
//True y False

// Variables
// let
// const

// Operadores
// + - * /
// > < 
// { }

// Ejemplo de concatenacion: 
let edad = 33
let anio = 2020
let unAnioNacimiento = edad - anio

// console - esa en la console

console.log(unAnioNacimiento)

// alert(mensaje) - no devolve nada

let mensajeAlert = "Hola, soy un mensaje con alert"
alert(mensajeAlert)

// prompt(mensaje) - abre para escribir

let mensajePrompt = "Hola, soy un mensaje con prompt"
prompt(mensajePrompt)

// confirm(mensaje) - buton elegir

let mensajeConfirm = "Hola, soy un mensaje con confirm"
confirm(mensajeConfirm)

// intercalar variables dentro del string

var foo = 'joya';
var faa = 'dia'
console.log(`Hoy es un ${faa} muy ${foo}`);

/*funcion con variables = bloque de codigo (scope/alcance):
--- las funciones definen un bloque de codigo reutilizable ---
*/

let funcionDeEjemplo = () => {
    console.log("hola es esta adentro de la () => {}")
}

// ejecultar la funcion con ()
funcionDeEjemplo()

/* la variable solo viven adentro de la funcion o sea, 
no ejecultable desde afuera.
*/

let funcionDeEjemplo1 = () => {
    let ejemplo = "alguna cosa adentro de la funcion"
}

funcionDeEjemplo1() // no funciona: error

// ejemplo correcto:

let funcionDeEjemplo2 = () => {
    let ejemplo = `alguna cosa adentro de la funcion con console`
    console.log(ejemplo)
}

funcionDeEjemplo2()
funcionDeEjemplo2()
funcionDeEjemplo2()

// ejemplo parametros: 

let funcionDeParametros = (cosas) => {
    console.log(cosas)
}

funcionDeParametros("Mesa")
funcionDeParametros("Silla")
funcionDeParametros("Mantel")
funcionDeParametros("Vaso")

// ejemplo de parametros del usuario: (const = constante)

// pregunta:
const cosasDeCasa = prompt("Nombrame un objeto (para el console:)")

// acion: 
let funcionDeParametros1 = (cosasDeCasa) => {
    console.log(cosasDeCasa)
}

// respuesta:
funcionDeParametros1(cosasDeCasa)


// parametros o argumentos:

const decirNumeros = (numero1, numero2) => {
    alert(`Las ordenes son ${numero1} ${numero2}`)
}

decirNumeros("primeiro parametro", "segundo parametro")


// undefined : no es un error, es un dato vacio


// return = retorno de la funcion :

const suma = (numero1, numero2) => {
    const primerNumero = numero1 + 5
    const segundoNumero = numero2 * 7
    const resultado = primerNumero + segundoNumero
    return resultado
}

let resultadoDeLaSuma = suma(1, 4)
console.log(resultadoDeLaSuma)


// ejemplo 2:

const agregarPiEnTodo = (frase) => {
    const palavraclave = "pi pa pum "
    return palavraclave + frase
}

//mostrame la funcion que define o que retorna en el console:

console.log(agregarPiEnTodo("pum pa pi"))