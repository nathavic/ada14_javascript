const sumar = (numero1, numero2) => {
    alert(numero1 + numero2)
}

sumar(1, 2)
sumar(20, 33)
sumar(49, 67)
sumar(78, 92)
sumar(126, 363)


/* 4 cosas a tener en cuenta con parametros: 

1 - El orden en que los escribo, 
es el orden en que la funcion les asigna valor. 

Si la funcion espera 2 parametros y yo le pase 3, 
el 3ro es ignorado:

(numero1, numero2)
(1, 2, 3) 

Si la funcion espera 3 parametros y yo le paso 2, 
el 3ro toma como valor "undefined"
(numero1, numero2, numero3)
(1, 2)

Si no defino un parametro en la declaracion de la funcion 
pero lo uso dentro de la funcion, 
hay un error


*/