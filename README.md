# MERN Project (EU APP-Essaouira university )

=============>Importatnt Infomration<============
		==================
export variable environment (source .bashrc) for database and athentication to work
		==================

changes we made based on your Suggestions : 
	1=> change Professor and Student Collection to User Collection With role attribute (Admin,Student,Professor)
	2=> Filtring Students
	3=> Logout
	4=> fixing Athorization Probleme is (Admin,Student,Professor)

=============>Importatnt Infomration<============

=========================================================
#>>SERVER :
=========================================================
	Befor starting the server : 

0- >$cd MERN_Project && cd Server
1-Install dependencies
2- export variable environment !important
2.1- if your on Linux
2.1.1- in Terminal run >$source .bashrc
2.1.2- after exporting envs run dev script >$npm run dev
2.2- if your on windows
2.2.1- in cmd run >$ call .bat
2.2.2- after exporting envs run dev script >$npm run dev

	Finished Routes in Server :
	
1- /api/user (with authorization and authentication)
==>POST '/' gets users with specific role if no role is been sent get all users
==>GET '/:id' gets user with specific ID
==>DELETE'/:id' delets user with specific ID (only if authenticat+ADMIN)
==>PUT'/:id' Updates user with specific ID (only if authenticat+ADMIN)
==>POST '/add' add user to database 

2- /api/login (with Login Token "JWT")
==>POST '/' authenticat the user

3- /api/group
==>GET '/' gets all groups
==>GET '/:id' gets group with specific ID
==>DELETE'/:id' delets group with specific ID (only if authenticat+ADMIN)
==>PUT'/:id' Updates group with specific ID (only if authenticat+ADMIN)
==>POST '/' add group to database 

4-/api/upload
==>POST '/' this route stores files in database in separate folders (based on user role Student,Professor) + storing link in users Uploads collection
	Routes Still in progress :
1-Absence route.
==============================================================
#>>Client
==============================================================
0- > intall dependencies npm install
1 -> npm start
Runs the app in the development mode.

==>Home
http://localhost:3000 : shows a signin Button for login in 
	to login as ADMIN: 
		##username:c@c.com
		##password:123ABCabc

	to login as Student : 
		##username:m@m.com
		##password:123ABCabc

==>Dashbord
	after you login you will be directed to a dashbord,
	and your Role and Full Name will be displayed in the header,
	also with the logout button which deletes your JWT_Token from localStorage 
==>FOR ADMIN : only appears Students bar and Teachers bar in the Nav bar 
Students bar Contains : 
	==> /Students : 
		Show All Student with the ability to filter by CIN, CNE, group and Last Name,
		also the ability to Remove and Edit Students in actions culomn and Show detial of students.
	==>/admit_student (add_Student) : 
		you can add a Student with his full information + and also this componnets has the ability
		to modify Students.
	==>/student_detail
		show information of a student in case if an id is been submited in the URL else
		it Shows your Information

==>FOR Students: only appears Library and Class and subject bar

- > http://localhost:3000/dashboad
#dashboad of the app that will show all statistics of the students and teachers

- > http://localhost:3000/Acount
#user compte setting 
