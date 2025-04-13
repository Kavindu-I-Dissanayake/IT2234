## Students Database management with Express. js
This practical involves creating a simple RESTful API using Express. js to manage student data stored in a
JavaScript array. tThe application allows querying students by ID and gender through designated routes.

### Files and Structure
1) studentsdb.js
 - Contains the array of student objects.
 - Exported as students for use in other modules.
2) studentroute. js
  - Defines routes using Express. js to handle HTTP requests related to student data.
  - Imports studentService to interact with the students array.
3) studentservice.js
  - Provides functions to interact with the students array.
  - Exports functions to retrieve all students, find a student by ID. and filter students by gender.
4) The index-js
This file is the main starting point of your Express. js application. It is the control center that
  - Initializes the server
  - Loads the necessary routes (like student-related routes)
  - Tells Express which port to listen on

## Example Outputs obtained using Postman
### To retrieve all students data: localhost:3001/student
![image](https://github.com/user-attachments/assets/fd462930-eac4-476a-afd8-3807ccde1eca)

### To retrieve students data (ById): localhost:3001/student/id
![image](https://github.com/user-attachments/assets/246c73d7-409a-4c95-a980-709f5a62a811)

To retrieve students data (ByGender): localhost:3001/student/gender/Male
![image](https://github.com/user-attachments/assets/195022fc-c764-420a-930a-20ccc1252b35)




