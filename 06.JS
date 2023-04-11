// Creación de objeto
var persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 20,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }
  };
  
  // Acceso a propiedades y métodos del objeto
  console.log(persona.nombre); // Imprime "Juan"
  persona.saludar(); // Imprime "Hola, mi nombre es Juan Pérez"
  