//import the express js

const { request, response } = require('express');
const express=require('express')

//create new express app

const app=express();

//add the mapping for method and url
//route : mapping of method with url

app.get('/',(request,response)=>{

    console.log("Received GEt request")
    
    })

    app.post('/blog',(request,response)=>{

        console.log("Received POST request")
        
        })



//start the express application

app.listen(3000,'0.0.0.0',()=>{


    console.log("Server started from port 3000")

}); 