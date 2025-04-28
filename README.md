## MongoDB
### Creating the UniDb database,students Collection and insert data
![image](https://github.com/user-attachments/assets/d15a92f9-8c97-44bb-863d-ab646a353034)

####  01. Insert one data set using db.students.insertOne() query.
![image](https://github.com/user-attachments/assets/8807caba-d41b-4204-adbb-cf7adeb4c121)

####  02. Insert data set using db.studentsMany() query.
![image](https://github.com/user-attachments/assets/2a344d7a-293a-4e16-8774-127f224b14fd)
![image](https://github.com/user-attachments/assets/1489b963-db67-48d4-af99-45e99f5d0b9e)

### Updated data collection
![image](https://github.com/user-attachments/assets/7f7516ae-37ae-4862-887d-4614de986532)
![image](https://github.com/user-attachments/assets/75ba9d0a-fa0d-4a5b-9003-50d85c40d2cd)

### db.students.find() query
####  01. Filter only name and age.
Project &rarr; {name:1,age:1,_id:0}
![image](https://github.com/user-attachments/assets/59ee6b69-256a-4ff7-9c7c-690e9d3fb16f)

####  01. Find the details whose regno is "2021IT005".
![image](https://github.com/user-attachments/assets/a7799637-fc82-48c0-9402-81733717d143)

#### shell query:
#### db.students.find({"regno":"2021IT002"})
![image](https://github.com/user-attachments/assets/a11680a9-14af-4864-a2ce-968b7810f037)

#### 03. Find male students details.
![image](https://github.com/user-attachments/assets/7b1d011a-3cab-4ce4-9292-20dbc01404fd)

#### shell query:
#### db.students.find({gender:"Male"})
![image](https://github.com/user-attachments/assets/8c76ef31-d809-4362-9680-d54cc91aa7be)
![image](https://github.com/user-attachments/assets/07cead11-c40c-4af3-9584-ac4fcd59e573)

#### 04. Find the students whose age is greater than 24.
![image](https://github.com/user-attachments/assets/a123f614-b2c7-4c5e-94b3-0437a8b2f7a2)

#### shell query:
#### db.students.find({age:{$gt:24}})
![image](https://github.com/user-attachments/assets/bedf821a-0f48-4296-80e9-21e1bbed92f6)

#### 05.Find the details of students that have skills in "MongoDB".
#### {skills:{$in:['MongoDB']}}
![image](https://github.com/user-attachments/assets/f40fffcd-b4c8-4f55-9ce0-f85b13a796a8)

### shell query:
#### db.students.find({skills:{$in:['MongoDB']}})
![image](https://github.com/user-attachments/assets/16b16224-5daf-4af1-b8fd-ec81fcb7be8d)

#### 06.Find the students that have skills in "MongoDB" or "PHP".
#### {skills:{$in:['Java','PHP']}}
![image](https://github.com/user-attachments/assets/41825480-5639-47bc-9046-4a34b099241a)

#### shell query:
#### db.students.find({skills:{$in:['Java','PHP']}})
![image](https://github.com/user-attachments/assets/8372f88c-95db-4b35-9199-dd457396882c)

#### 07. Find the details of first female student.

#### shell query:
#### db.students.findOne({gender:"Female"})
![image](https://github.com/user-attachments/assets/bf912631-42f4-4abd-becf-1cf8c0b491f7)

#### 08. Sort the details by gpa ascending order.
#### sort &rarr; {gpa:1}
![image](https://github.com/user-attachments/assets/513abf41-3927-43e7-b956-a3cb5c7cde90)
![image](https://github.com/user-attachments/assets/9d9b4129-9279-4775-974e-7aeb8ed4f8a4)
![image](https://github.com/user-attachments/assets/a1b78f8c-a1f5-468a-bca1-00cae72f96d5)

#### shell query: 
#### db.students.find().sort({gpa:1})
![image](https://github.com/user-attachments/assets/a1099ac0-6991-4720-9677-8c4e1f42d1bb)
![image](https://github.com/user-attachments/assets/f023c87f-ea6c-4646-945d-175834fecac4)
![image](https://github.com/user-attachments/assets/40b58abb-f4bd-4091-b1af-37cd1b9f4d65)

#### 09. Sort the details by gpa descending order.
#### sort &rarr; {gpa:-1}
![image](https://github.com/user-attachments/assets/30971c65-22e0-4c63-bc12-d2ec7afddda7)
![image](https://github.com/user-attachments/assets/fc61df2e-ceb9-4603-a509-c037d8bccb9d)
![image](https://github.com/user-attachments/assets/879bbf23-4d87-4800-aa51-108267e1b8ed)

#### shell query: 
#### db.students.find().sort({gpa:-1})
![image](https://github.com/user-attachments/assets/512ba5b8-de0e-4dd7-98b5-4940723f7a2b)
![image](https://github.com/user-attachments/assets/ef47de96-d902-4944-8bb0-a1bf8a22826e)
![image](https://github.com/user-attachments/assets/f79d1726-59f6-45d6-90d4-8c17678e50ce)

#### 10.Sort details by GPA and name in ascending order.
#### sort &rarr; {gpa:1,name:1}
![image](https://github.com/user-attachments/assets/a6df7e36-55f2-4834-bee6-51a91ee7b63c)
![image](https://github.com/user-attachments/assets/780e46fa-5135-48a9-9231-741eb8225926)
![image](https://github.com/user-attachments/assets/a8839c73-15be-4f13-8e78-a0aab0629143)

#### shell query: 
#### db.students.find().sort({gpa:1,name:1})
![image](https://github.com/user-attachments/assets/90abe1d6-fbb3-400a-bc9f-2e5c56d1a60e)
![image](https://github.com/user-attachments/assets/9ed41306-ee7d-4315-a551-a49d941d4222)
![image](https://github.com/user-attachments/assets/7cac1e7d-900a-41cc-b783-bb4d3c068ea9)

#### 11. Sort by gpa ascending order who are stydying "IT" as degree.
#### query &rarr; {degree:"IT"}
#### sort &rarr; {gpa:1}
![image](https://github.com/user-attachments/assets/05a7fd84-f203-4705-8986-005039569f4f)
![image](https://github.com/user-attachments/assets/3ccb2d17-6c00-4371-981d-1458e2e3e24f)
![image](https://github.com/user-attachments/assets/e7076428-5dc0-402d-8ef9-39f01920ec57)

#### shell query: 
#### db.students.find({degree:"IT"}).sort({gpa:1})
![image](https://github.com/user-attachments/assets/b9b945b9-7085-401b-9164-53e745ceb5af),
![image](https://github.com/user-attachments/assets/9457d629-58a6-4620-b3d1-fc13d7291f28)
![image](https://github.com/user-attachments/assets/7fd13471-9c93-4a43-aba5-2fcc2979e2a4)

#### 12. Sort by gpa ascending order who are stydying "IT" as the degree and gender is "Male".
#### query &rarr; {degree:"IT",gender:"Male"}
#### sort &rarr; {gpa:1}
![image](https://github.com/user-attachments/assets/8e8f195f-8ee3-4cf9-a2a0-d339cc92edf0)
![image](https://github.com/user-attachments/assets/7a13c07e-7a89-4778-bf54-6e7a29fcc540)

#### shell query: 
#### db.students.find({degree:"IT",gender:"Male"}).sort({gpa:1})
![image](https://github.com/user-attachments/assets/db4e09fc-3f0d-494a-b441-14a9332b22b7)
![image](https://github.com/user-attachments/assets/15ae5099-042b-4fd6-8541-0be2a5763acf)













































