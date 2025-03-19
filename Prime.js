//Write a boolean function to find a given number is prime
function isPrime(number) 
{
	let count=0
	
	for(let i=1; i<=number; i++)
	{
		if(number%i==0)
		{
			count++;
		}
	}
	
	if(count==2)
	{
		return true
	}
	else
	{
		return false
	}
	
	
}

console.log(isPrime(8))
console.log(isPrime(11))
console.log(isPrime(1))
console.log(isPrime(233))

