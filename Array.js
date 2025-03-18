//Ex 1:-
console.log("===== Array Display-Numbers ===== ")
	console.log("\n") //for leave a line
	
let number = [1,2,3,4]

//Display method 01
console.log("------ Array Display-Method 01 ----- ")
	console.log(number)
	
	console.log("\n")
	
//Display method 02
console.log("------ Array Display-Method 02- ForLoop ----- ")
	for(let i=0; i<number.length; i++)
	{
		console.log(number[i]);
	}
	
	console.log("\n") 

//Display method 03- All elements were printed. Can't control the elements.
console.log("------ Array Display-Method 03-ForEach ----- ")
	number.forEach((n)=>
	{
		console.log(n)
	}
	)
	
	console.log("\n")


//Find the maximum number by using forEach method
console.log("------ Find MAX number from array ----- ")
	let max = number[0]
		number.forEach((n)=>
		{
			if(max<number[n])
				max=number[n]	
		}
		)
	console.log(max);
	
	console.log("\n")
	
	
//Array 02
console.log("===== 2D Array ===== ")
let array = [[1,2,3],[4,5],[6,7,8]]

//Display method 01
console.log("------ 2D Array Display-Method 01- ForLoop ----- ")
	for(let i=0; i<array.length; i++)
		for(let j=i; j<array.length;j++)
			{
				console.log(array[i,j]);
			}
			
	console.log("\n") 
	

//Display method 02
console.log("------ 2D Array Display-Method 02-ForEach ----- ")
	array.forEach((n)=>
	{
		n.forEach((m)=>
		{
			console.log(m)
		}
		)
		
	}
	)
	
	console.log("\n")



