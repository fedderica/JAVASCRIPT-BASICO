Spread operator:
El operador de propagación (spread operator) en JavaScript permite expandir un objeto iterable (como un array) en varios elementos. Un ejemplo de uso sería la creación de un nuevo array a partir de dos arrays existentes.

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const newArray = [...array1, ...array2]

console.log(newArray) // Output: [1, 2, 3, 4, 5, 6]
