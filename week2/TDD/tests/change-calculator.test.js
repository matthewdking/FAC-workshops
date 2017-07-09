var test = require('tape'); // assign the tape library to the variable "test"
var calculators = require('../scripts/change-calculator.js');  // require (not-yet-written) module

test('calculateChange(215, 300) should return [50, 20, 10, 5]', function(t) {
	var actual = calculators.calculateChange(300, 10400); //expect an array containing [50, 20, 10, 5]
	var expected = [5000, 5000, 100];

	t.deepEqual(actual, expected);
	t.end();
})

test('calculateChange(12, 42) should return [20, 10]', function(t) {
	var actual = calculators.calculateChange(12, 42); 
	var expected = [20, 10];

	t.deepEqual(actual, expected);
	t.end();
})

test('calculateChange(470, 675) should return [200, 5]', function(t) {
	var actual = calculators.calculateChange(470, 675); 
	var expected = [200, 5];

	t.deepEqual(actual, expected);
	t.end();
})

test('changeTotalCalc(215, 300) should return 85', function(t) {
	var actual = calculators.changeTotalCalc(215, 300); //expect an array containing [50, 20, 10, 5]
	var expected = 85;

	t.deepEqual(actual, expected);
	t.end();
})