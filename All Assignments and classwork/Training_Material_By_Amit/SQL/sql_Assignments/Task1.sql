--1)create 'student_db' database
    create database student_db;
-- -- use student_db;
-- create following tables in database with proper data types
-- student: id (PK), name, address, phone, email, age, schoolId (FK)
-- school: id (PK), name, address, principal, phone

--2)create relationship as shown in the table schema
    create table student(
    id integer primary key identity(1,1),
    name varchar(20),
    address varchar(30),
    phone integer,
    email varchar(30),
    age integer,
    school_id integer
     foreign key (school_id)references school(id)
  );
  create table school (
  id integer primary key,
  name varchar(20),
  address varchar(20),
  principle varchar(20),
  phone varchar(20)
    
  );
--3)  add some dummy data

 insert into School (id,name,address,principle,phone)
 VALUES
 (2,'lkh' , 'Pune','xyz',88927),
 (3,'sdl' , 'Satara','xyz',989277), 
 (4,'jsl' , 'Dhule','xyz',849257),
 (5,'skl' , 'Nashik','xyz',883257)
insert into student_db(name,address,phone,email,age,school_id)

update school 
set name='pqr'
where id=1;

--  select * from School;
