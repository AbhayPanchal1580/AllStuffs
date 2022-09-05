-- use sales_db;
--1)Write a query that lists each order number followed by the name of the customer who made theorder.
select orders.onum customers.cname from orders , customers where orders.cnum=customers.cnum

--2)Write a query that gives the names of both the salesperson and the customer for each order along
--with the order number.

 Select orders.onum , customers.cname ,salespeople.sname from orders  ,customers ,salespeople
 where  customers.cnum=orders.cnum and customers.snum=salespeople.snum

--3)Write a query that produces all customers serviced by salespeople with a commission above 12%.
--Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission
 select customers.cname , salespeople.sname ,salespeople.comm from salespeople,customers
 where  customers.snum=salespeople.snum and salespeople.comm>0.12
 --4)Write a query that calculates the amount of the salesperson’s commission on each order by a
--customer with a rating above 100.
select o.amt*s.comm as CommissionAmount 
 from orders o 
 inner join salespeople s 
 on o.snum=s.snum 
 inner join customers c on c.rating>100 
 and o.snum=c.snum;

--5)Write a query that produces all pairs of salespeople who are living in the same city.Exclude
--combinations of salespeople with themselves as well as duplicate rows with the order reversed
select s1.sname,s2.sname,s1.city from salespeople s1,salespeople s2  
WHERE
s1.city=s2.city
AND  s1.sname>s2.sname;

