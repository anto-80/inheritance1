const Passenger = require('./Passenger')
const Person = require('./Person')
describe('Passenger', function () {
  const passenger = new Passenger("mike",11, "male")
    test('has a name', function () {
        expect(passenger.name).toBe('mike');
    });
    test('does not have a name', function () {
        expect(() => new Passenger()).toThrowError('passenger must have a name');
    });
    test('has age', function () {
        expect(passenger.age).toBe(11);
    });
    test('has gender', function () {
        expect(passenger.gender).toBe('male');
    });
})