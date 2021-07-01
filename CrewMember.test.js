const Steward = require('./Steward')
const Person = require('./Person')

describe('Steward', () => {

	const testSteward = new Steward("Antony")

	test('Steward are people too!', () => {
		expect(Steward instanceof Person).toBeTruthy
	})
}) 