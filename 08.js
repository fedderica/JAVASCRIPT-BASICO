const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});


const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'running', 'swimming']
  };
  
  person.hobbies.forEach(function(hobby) {
    console.log(this.name + ' likes ' + hobby);
  }, person);
  