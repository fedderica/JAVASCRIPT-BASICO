Desestructuración de objetos:
La desestructuración de objetos en JavaScript permite asignar los valores de las propiedades de un objeto a variables específicas. Un ejemplo de uso sería la obtención de los datos de un objeto de usuario



const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  }
  
  const { name, age, email } = user
  
  console.log(name, age, email) // Output: John 30 john@example.com
  