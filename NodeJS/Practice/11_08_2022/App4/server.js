const { request, response } = require("express");
const express = require("express");
const mysql = require("mysql");

function openConnection() {
  //create the connection
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "blogs_db",
  });

  //open the connection
  connection.connect();
  return connection;
}

const app = express();

//read the data from request.body
app.use(express.json());

app.get("/blog", (request, response) => {
  // get the connection
  const connection = openConnection();

  // create the query statement
  const statement = `select id, title, contents from blogs`;

  // execute the query and get the data
  connection.query(statement, (error, blogs) => {
    // close the connection
    connection.end();

    console.log(blogs);

    //  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
    // flush privileges

    if (error) {
      console.log(`error occurred`);
      console.log(error);
      response.send(error);
    } else {
      response.send(blogs);
    }
  });
});

app.post("/blog", (request, response) => {
  const blog = request.body;

  // get the database connection
  const connection = openConnection();

  // create the statement
  const statement = `insert into blogs (title, contents) values ('${blog.title}', '${blog.contents}')`;

  // execute the query
  connection.query(statement, (error, result) => {
    // close the connection
    connection.end();

    response.send(result);
  });
});

app.put("/blog/:id", (request, response) => {
  const { id } = request.params;
  const { title, contents } = request.body;

  //open the connection

  const connection = openConnection();

  //create the statement
  const statement = `update blogs set title = '${title}', contents = '${contents}' where id = ${id}`;

  //execute the query
  connection.query(statement, (error, result) => {
    //close the connection
    connection.end();

    response.send(result);
  });
});

app.delete("/blog/:id", (request, response) => {
  const { id } = request.params;
  //create connection
  const connection = openConnection();

//   create statement

const statement=`delete from blogs where id=${id}`


//execute the query

connection.query(statement,(error,result)=>{
// close the connection

connection.end();

response.send(result)
})

});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server stared on prt number 3000");
});
