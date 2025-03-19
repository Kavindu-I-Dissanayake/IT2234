//using trible dot(...) - you can pass any numbers through this. Output like an Array.
console.log("=====Using trible dot concept(...)======")
const Numbers = (...n) =>
{
	console.log(n)
	
}

Numbers(4,8,605,4,92,45)

console.log()

console.log("-----Summation by using trible dot(...)-----")
//forEach
console.log("Using forEach")

const myNum = (...n) =>
{
	let t=0
	n.forEach((i)=> t = t+i)
	console.log(t)

}

console.log(myNum(10,20,30,40))

//Using reduce
console.log("Using Reduce")

const myNumber = (...n) =>
{
	return n.reduce((t,i)=>t=t+i)
}

console.log(myNumber(1,2,3,4,5))