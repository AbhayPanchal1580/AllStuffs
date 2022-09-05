--use sales_db
--1)Create an index that will enable a user to pull orders for ‘1990-10-03’ out of the Orders table
--quickly.
    create index o_order  on orders(odate) WHERE odate ='1990-10-03'
--2)If the Orders table has already been created, how can you force the onum field to be unique
--(assume all current values are unique)?
    Alter table orders add  unique(onum)
--3)Create an index that would permit salesperson to retrieve his orders.
    create index s_orders on orders(snum) 
--4_Let us assume that each salesperson is to have only one customer of a given rating, and that this is
--currently the case. Create an index that enforces it.
    create index sales_cust on customers(snum,cnum,rating)
--5)Create an index to speed up searching order on a given date by given customer
    create index search_order  on orders(odate) 