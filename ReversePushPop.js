//  Write a program to reverse an array using push and pop method.
let array = ['a','b','c','d'];
const arrLength = array.length;
let newArray = [];
console.log(array)

	for(let i=0; i< arrLength; i++)
	{
		newArray.push(array.pop());
	}
	
	console.log(newArray)