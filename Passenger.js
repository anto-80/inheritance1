const Person = require('./Person')
class Passenger extends Person {
    constructor(name, age, gender) {
      if (!name) {
              throw new Error('passenger must have a name');
          }
     this.name = name
     this.age = age
     this.gender = gender
    }
  }
  module.exports = Passenger;
  