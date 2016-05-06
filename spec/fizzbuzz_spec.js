//A test specification for the fizzbuzz program
var fb = require('../fizzbuzz');

describe("A program that implements fizzbuzz", function() {

 	it("can count from 1 to 5", function() {
 		expect(fb.count(1,5)).toBe('1 2 3 4 5');
 		expect fb.count(10,15).toBe("buzz, 11, fizz, 13, 14, fizzbuzz ")
	});

 	it("can take a number and return fizz if it is a multiple of 3", function() {
 		expect(fb.fizzer(3)).toBe('fizz');
 		expect(fb.fizzer(6)).toBe('fizz');
 		expect(fb.fizzer(18)).toBe('fizz');
 	});

 it("can take a number and return buzz if it is a multiple of 5", function() {
 		expect(fb.buzzer(5)).toBe('buzz');
 		expect(fb.buzzer(10)).toBe('buzz');
 		expect(fb.buzzer(20)).toBe('buzz');
 	});

 it("can take a number and return fizzbuzz if it is a multiple of 3 and 5", function() {
 		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
 		expect(fb.fizzbuzzer(30)).toBe('fizzbuzz');
 		expect(fb.fizzbuzzer(45)).toBe('fizzbuzz');
 	});

});