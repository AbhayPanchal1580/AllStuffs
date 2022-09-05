--1)create 'product_db' databse
-- 2)create following tables
-- categories: id (PK), title, description
-- products: id (PK), title, price, description, category (FK), company
-- orders: id (PK), total, date
-- order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
-- 3)create relationship as shown in the table schema
-- 4)add some dummy data
 
    create database product_db;
   create table categories(
   id integer primary key identity(1,1),
   title varchar(30) ,
   description varchar(50) 
  ); 
    create table products (
    id integer primary key identity(1,1),
    title varchar(20),
    price integer,
    description varchar(50),
    category integer ,
    company varchar(20)
    foreign key (category) references categories(id) 
  );
    create table orders(
    id integer primary key identity(1,1),
    total integer ,
    date date,
  );
    create table order_details(
    id integer primary key identity(1,1),
    orderid integer,
    productid integer,
    quantity integer,
    price integer,
    totalprice integer, 
   discount integer,
    foreign key (orderid) references orders (id),
    foreign key (productid) references products(id)
  );
  insert into categories(title , description)
  values('Men','Mens Clothing'),
         ('Women','Women Clothing'),
        ('Kids','Kids Clothing');
  insert into products (title,price,description,category,company)
  VALUES('Trousers',800,'Trousers for men',1,'xyz'),
        ('Jeans',400,'Jeans for kids',3,'pqr'),
        ('Tops',600,'Tops for women ',2,'kdb');
 
  insert into orders (total,date)
  values (800,'2022-08-25'),
         (400,'2022-08-31'),
         (600,'2022-08-03');
        
   insert into order_details(orderid,productid,quantity,price,totalprice,discount)
   values(1,1,4,800,800*4-10,10),
         (2,2,2,400,400*2,0),
         (3,3,5,600,600*5-50,50);
     
     

   
=
    
