// Code to understand JSON concept

let student = {regno:'2021/ICT/64', name:'Kavindu', age:24, course:'IT'}
	console.log(student) 
	console.log(student.name) 
	
//More than one
let students = [
{regno:'2021/ICT/64', name:'Saminda', age:23, course:'IT'},
{regno:'2021/ICT/66', name:'Wihansi', age:23, course:'IT'},
{regno:'2021/ICT/67', name:'Nadun', age:22, course:'IT'}
]

	console.log(students) 
		/*Output : [
					  { regno: '2021/ICT/53', name: 'Kavindu', age: 24, course: 'IT' },
					  { regno: '2021/ICT/153', name: 'Induwara', age: 24, course: 'IT' },
					  { regno: '2021/ICT/253', name: 'Dissanayake', age: 24, course: 'IT' }
					]
		*/
	console.log(students.name) //Output: undefined