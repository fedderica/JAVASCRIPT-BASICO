FUNCIONES FLECHA


Las funciones flecha en JavaScript permiten crear funciones de manera más concisa y con un comportamiento específico del contexto en el que se ejecutan. Un ejemplo de uso sería la creación de una función para filtrar elementos de un array.


const numbers = [1, 2, 3, 4, 5]

const filteredNumbers = numbers.filter(number => number % 2 === 0)

console.log(filteredNumbers) // Output: [2, 4]
