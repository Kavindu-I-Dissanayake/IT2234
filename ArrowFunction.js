//Arrow Functions
console.log("-----------Arrow Functions-----------")
console.log()
//Normal function
console.log("Normal Function-Print")
function PrintMsg()
{
	console.log("Hello JS")
}

PrintMsg()


//Arrow function
console.log("Arrow Function-Print")
const msg =() => 
{
	(console.log("Hello JS"))
}

msg()

	console.log()

//Write an arrow function to sum 2 numbers
console.log("Arrow Function-Mathematical")
const add = (a,b) =>
{
	return a+b
}

console.log(add(5,6))


//using default parameter
console.log("Using default parameter")
const mul=(a,b=8) =>
{
	return a*b
}

console.log(mul(4,5))
console.log(mul(4))
