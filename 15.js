bucle for in 


const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Bogotá'
};

for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
