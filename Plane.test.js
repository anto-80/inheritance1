const Plane = require('./Plane')
describe('Plane', function () {
  const plane = new Plane("economy",111, 6)
    test('has a pclass', function () {
        expect(plane.pclass).toBe('economy');
    });
    test('does not have a pclass', function () {
        expect(() => new Plane()).toThrowError('plane must have a pclass');
    });
    test('has seats', function () {
        expect(plane.seats).toBe(111);
    });
    test('has restrooms', function () {
        expect(plane.restrooms).toBe(6);
    });
})