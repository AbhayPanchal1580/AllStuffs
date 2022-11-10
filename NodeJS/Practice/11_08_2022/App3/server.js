//Array  of blogs

const blogs = [
  { id: 1, title: "blog1", content: "This is blog 1" },
  { id: 2, title: "blog2", content: "This is blog 2" },
  { id: 3, title: "blog3", content: "This is blog 3" },
];

const { response } = require("express");

//importing express
const express = require("express");

//creating server
const app = express();

//Middleware: the function will be called everytime you send a request to the server
function log(request, response, next) {
  console.log("Inside the log function");
  console.log(`Method=${request.method}`);
  console.log(`URL=${request.url}`);
  next(); //calls next logical function
}

//Use the middleware so that the function get called everytime
app.use(log);

//Use the middleware to read contents of request body

app.use(express.json());

app.get("/blog", (request, response) => {
  response.send(blogs);
});

app.post("/blog", (request, response) => {
  console.log(`POST /blog`);
  const blog = request.body;
  console.log(`blog = `, blog);

  //add the data inside the blogs array
  blogs.push(blog);

  response.send("Added a new blog");
});

app.post('/blog', (request, response) => {
    console.log(`POST /blog`)
    const blog = request.body
    console.log(`blog = `, blog)
  
    // add the new blog to the array
    blogs.push(blog)
    response.send('added a new blog')
  })
  
  app.put('/blog/:id', (request, response) => {
    console.log(request.params)
  
    // get the value of id from request params
    const { id } = request.params
    const updatedBlog = request.body
    console.log( request.body)
  
    // find the index of the blog having id sent by the user
    const index = blogs.findIndex((blog) => blog.id == Number(id))
    console.log(`index = ${index}`)
    if (index != -1) {
      // we found the blog with the required id
      blogs.splice(index, 1, updatedBlog)
    }
    response.send('updated the blog')
  })

app.delete("/blog/:id", (request, response) => {

  //getting the id of blog to be deleted 
  const {id}=request.params;

  // find the blog index to be deleted

  const index=blogs.findIndex((blog)=>blog.id==Number(id))

  console.log(index)

  if(index!=-1){
    blogs.splice(index,1)
  }
  response.send("Deleting a blog");
});

//start server
app.listen(3000, "0.0.0.0", () => {
  console.log("Server started on port 3000");
});
