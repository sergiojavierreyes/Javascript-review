// write a function that takes in three parameters and returns the sum of those three parameters //

function sumOf(one,two,three) {
	return one + two + three
}

sumOf(4,5,6) // 15

/* 
given a string, create a function that returns the last character in that string.
examples: "cattywampus" --> s 
*/

function lastLetter(word) {
	return word.slice(-1)
}

lastLetter("Javascript") //t//

/* 
write a function that takes in one parameter and returns the cube of that parameter
examples: 3 --> 27 4 --> 64
*/

function allSquare(cube) {
	return cube * cube * cube
}

allSquare(3) // 27 //
allSquare(4) // 64 //

/*
define a function that takes in a string and reverses it. you are not allowed to
call the "reverse" function (or any other string functions)
*/

function turnAround(str) {
	var reverseString = ""
	for (var i = str.length - 1; i >=0; i--){
		reverseString += str[i]
	}
	return reverseString
}

turnAround("Sergio") //oigreS//

/*
write a function that takes in two arrays of the same length as parameters. From those two arrays,
create, then return an object which contains the elements of the first array as keys, and the
elements of the second array as values.
examples:
["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }
*/

function foodList (a1, a2) {
	var food = {}
	for (var i=0; i < array1.length; i++) {
		food[array1[i]] = array2[i]
	}
	return food
} 

var array1=["One", "Two", "Three"]
var array2=["Pizza", "Hamburger", "Hotdog"]

foodList(array1, array2)

/* Given an object with keys and values, create two arrays: one which contains the object's keys,
 and one which contains the object's values. Wrap this into a function which takes in one object
 that contains keys and values, and returns a different object that contains two keys. The first key
 should be named "keys" and will have the first array as a value. The second key should be named
 "values" and will have the second array as a value.
 examples:
 { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
 { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }*/



function separate (o) {
	var apartKv = {'keys': [], 'values': []};
	for (var property in o) {
		apartKv.keys.push(property);
		apartKv.values.push(o[property]);
	};
	return apartKv;
};

var diverge = { 
	bread: "butter", 
	Milk: "whole" 
};

separate(diverge)

