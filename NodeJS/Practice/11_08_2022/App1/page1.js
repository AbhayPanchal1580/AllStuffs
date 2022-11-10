//HTTP server
const http = require("http");

//Create http server

const server = http.createServer((request, response) => {
  //Process the request

  console.log(`method=${request.method}`);
  console.log(`path=${request.url}`);

  if (request.method == 'GET') {
    if (request.url == "/blog") {
      console.log("select *from  blog");
    } else if (request.url == "/user") {
      console.log("select *from  user");
    } else if (request.url == "/category") {
      console.log("select *from  category");
    }
  } else if (request.method == 'POST') {
    if (request.url == "/blog") {
      console.log("insert into blog..");
    } else if (request.url == "/user") {
      console.log("insert into user");
    } else if (request.url == "/category") {
      console.log("insert into category");
    }
  } else if (request.method == 'PUT') {
    if (request.url == "/blog") {
      console.log("update blog set..");
    } else if (request.url == "/user") {
      console.log("update user set..");
    } else if (request.url == "/category") {
      console.log("update category set..");
    }
  } else if (request.method == 'DELETE') {
    if (request.url == "/blog") {
      console.log("delete from  blog..");
    } else if (request.url == "/user") {
      console.log("delete from user..");
    } else if (request.url == "/category") {
      console.log("delete from category..");
    }
  }

  //Respond the response

  response.end("Message from server");
});

//Start the server

server.listen(3000, "0.0.0.0", () => {
  console.log("Server started listening on port 3000");
});
