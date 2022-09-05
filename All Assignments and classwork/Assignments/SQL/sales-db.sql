CREATE DATABASE SalesAsgnmnt;
use SalesAsgnmnt;


select * from salespeople;
select * from customers;
select * from orders;




SELECT count(odate) "TOTAL ORDERS",odate FROM orders GROUP BY odate ORDER BY "TOTAL ORDERS";

select city,max(rating) as rating from customers group by city;
SELECT ODATE, SNUM, MAX(AMT) FROM ORDERS WHERE AMT > 3000 GROUP BY ODATE, SNUM ORDER BY ODATE,SNUM;

select cnum, min(amt) from orders group by cnum;

SELECT orders.onum, customers.cname
FROM orders, customers
WHERE orders.cnum = customers.cnum;

Write a query that gives the names of both the salesperson and the customer for each order along
with the order number
SELECT salespeople.snum, customers.cname,orders.onum
FROM salespeople, customers,orders


Write a query that produces all customers serviced by salespeople with a commission above 12%.
Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission
SELECT cname,s.snum,comm*100 "Rate of comm"
FROM customers c,
salespeople s
WHERE c.snum=s.snum
AND comm>.12 ;


SELECT sname,cname,onum
FROM orders o,customers c,salespeople s
WHERE o.snum=c.snum AND o.snum=s.snum;


SELECT onum, cname, comm,
amt*comm 
FROM salespeople,orders,customers
WHERE orders.cnum = customers.cnum
AND orders.snum = salespeople.snum
AND customers.rating>100;

Select sname, amt * comm
from orders, customers, salespeople
where rating > 100 and
salespeople.snum = customers.snum and
salespeople.snum = orders.snum and
customers.cnum = orders.cnum

SELECT s.sname, s.city
FROM salespeople s,salespeople n
WHERE s.city=n.city
AND s.sname<n.sname;

Write a query that uses a subquery to obtain all orders for the customer named Cisneros. Assume you do not know his customer number (cnum). 


SELECT C.CNAME From customers c join salespeople s on customers.cname=salespeople.sname where customers.cname='cis'





create index d_orders 
 on orders(odate);

EXEC SP_COLUMNS ORDERS;    

ALTER TABLE ORDERS  

ADD CONSTRAINT UK_ONUM UNIQUE  (ONUM);

CREATE INDEX I_DATE ON ORDERS(ODATE);   

 ALTER TABLE CUSTOMERS MODIFY RATING PRIMARY KEY; 

CREATE INDEX ODATE ON ORDERS(CNUM ASC);  
