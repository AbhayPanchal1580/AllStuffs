--create database sales_db
--use sales_db
-- CREATE TABLE salespeople(snum int, sname varchar(10), city varchar(10), comm decimal(3,2));

-- CREATE TABLE customers(cnum int, cname varchar(10), city varchar(10), rating int, snum int);

-- CREATE TABLE orders(onum int, amt decimal(7,2), odate date, cnum int, snum int);

--  INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
--  INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
--  INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
--  INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
--  INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

-- INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
 --INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
 --INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
 --INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
 --INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
 --INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
 --INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);

--  INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
--  INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
--  INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
--  INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
--  INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
--  INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
--  INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
--  INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
--  INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
--  INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);

--1)Write a query that produces all rows from the Customers table for which the salesperson’s numberis 1001
Select * from Customers where snum=1001

--2)Write a select command that produces the rating followed by the name of each customer in SanJose
select rating ,cname from customers where city='san Jose'

--3)Write a query that will produce the snum values of all salespeople from the Orders table (with the
--duplicate values suppressed)

Select DISTINCT snum from orders 

--4)Write a query that will give you all orders for more than Rs. 1,000

Select * from orders where amt>1000

--5)Write a query that will give you the names and cities of all salespeople in London with a
--commission above 0.10
select sname ,city from salespeople where city = 'london ' and comm>0.10

--6)Write a query on the Customers table whose output will exclude all customers with a rating <=
--100, unless they are located in Rome
select * from customers where rating>100 or city= 'Rome'

--7)What will be the output from the following query? Select * from Orders
--where (amt < 1000 OR
--NOT (odate = ‘1990-10-03’
--AND cnum > 2003));

 select * from orders 
 where (amt < 1000 OR
 NOT (odate = '1990-10-03'
 AND cnum > 2003));
 
 --8)What will be the output of the following query?
--Select * from Orders
--where NOT ((odate = ‘1990-10-03’ OR snum >1006) AND amt >= 1500)
 Select * from Orders
 where NOT ((odate = '1990-10-03' OR snum >1006) AND amt >= 1500)

 --9)Write a query that selects all orders except those with zeroes or NULLs in the amt field
 Select * from orders where amt is not null and amt>0
