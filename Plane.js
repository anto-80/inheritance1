class Plane {
    constructor(pclass, seats, restrooms) {
      if (!pclass) {
              throw new Error('plane must have a pclass');
          }
     this.pclass = pclass
     this.seats = seats
     this.restrooms = restrooms
    }
  }
  module.exports = Plane;
  