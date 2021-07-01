class Airport {
    constructor(size, terminals, runways) {
      if (!size) {
              throw new Error('airport must have a size');
          }
     this.size = size
     this.terminals = terminals
     this.runways = runways
    }
  }
  module.exports = Airport;
  