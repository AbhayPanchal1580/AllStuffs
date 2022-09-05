--use sales_db

--1)Write a query that uses a subquery to obtain all orders for the customer named Cisneros. Assume
--you do not know his customer number (cnum).
  select orders.onum from orders  
  where cnum=(select cnum from customers where cname='cisneros')  

--2)Write a query that produces the names and ratings of all customers who have above- average
--orders
 Select cname , rating ,cnum from customers where cnum in (select cnum  from orders where amt>(select avg(amt) from orders))
--/*Use of in cmnd as 1st query is taking input of other sub query after calculation*/  

   select * from orders
 Select * from customers
 select * from salespeople

--3)Write a query that selects the total amount in orders for each salesperson for whom this total is
--greater than the amount of the largest order in the table.
 Select snum,sum(amt) as total_amt 
 from orders 
 group by snum 
  having (sum(amt)>(select max(amt) from orders))

--4)Write a query that selects all customers whose ratings are equal to or greater than ANY of Serres
 select cname ,rating from customers 
where rating>=(select max(rating) max_rating from customers 
 where snum=(select snum from salespeople where sname='serres'))

--5)Write a query using ANY or ALL that will find all salespeople who have no customers located in
--their city
SELECT s.sname,s.city ,c.cname,c.city FROM salespeople s, customers c WHERE s.snum= c.snum AND s.city != c.city;




--6)Write a query that selects all orders for amounts greater than any for the customers in London.
Select * from orders where amt >any (select cnum from orders where cnum in(select cnum from customers where city='London'))   

--7)Extract all the orders of Motika.
Select * from orders where snum=(select snum from salespeople where sname='Motika')

--8)Find all the order attribute to salespeople servicing customers in London
select * from orders where snum in(select snum from salespeople where city='London')

--9)Find names and numbers of all salesperson who have more than one customer. 
 select sname ,snum from salespeople  where snum in(select snum from customers group by snum having count(*)>1) 
  
--10) Find salespeople number,name and city who have multiple customers.
select sname , snum ,scity from salesperson where  snum in(select snum from customers group by snum having count(*)>1) 

 --11)Select customers who have a greater rating than any other customer in Rome
 select cname from customers where rating > any (select rating from customers where city='rome')

 --12)Select all orders that had amounts that were greater that at least one of the orders from ‘1990-10-
--04’ .
select * from orders where amt > (select min(amt) from orders where odate='1990-10-04')

--13)Find all orders with amounts smaller than any amount for a customer in San Jose
Select * from orders where amt < any (select amt from orders ,customers where city='san jose' and orders.cnum=customers.cnum)

--14)Select those customers whose rating are higher than every customer in Paris
select * from customers where rating > all (select rating from customers where city='paris')