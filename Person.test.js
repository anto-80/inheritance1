const Person = require('./Person')

describe('Person', () => {
    const testPerson = new Person('Tony')
	

	test('has a name', () => {
        expect(testPerson.name).toBe('Tony')
    })
}
	
