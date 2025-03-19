//callback function
//A function passed as an arugument

//Example 01
const greet = (msg,fun) =>
{
	console.log("Hi !"+msg)
	fun()
}

greet ("Good morning",()=>
{
	console.log("My name is Saminda")
}
)

console.log()
//Example 02
const multyTwo = (n) => n*3

const myArr = (mul,...n)=>
{
	n.forEach((i)=>console.log(mul(i)))
}

myArr(multyTwo,4,5,6,8)