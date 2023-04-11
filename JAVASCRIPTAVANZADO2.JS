Clases:
Las clases en JavaScript permiten crear objetos con propiedades y métodos específicos. Un ejemplo de uso sería la creación de una clase para representar un coche.

javascript


class Car {
    constructor(make, model, year) {
      this.make = make
      this.model = model
      this.year = year
    }
  
    start() {
      console.log(`Starting ${this.make} ${this.model}`)
    }
  
    stop() {
      console.log(`Stopping ${this.make} ${this.model}`)
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2020)
  myCar.start() // Output: Starting Toyota Corolla
  myCar.stop() // Output: Stopping Toyota Corolla
  