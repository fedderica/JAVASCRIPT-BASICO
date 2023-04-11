Las funciones map y reduce en JavaScript permiten realizar operaciones en arrays de manera más legible y estructurada. Un ejemplo de uso sería la creación de una función para sumar los elementos de un array.


const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum) // Output: 15
