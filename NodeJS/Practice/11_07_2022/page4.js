const fs=require('node:fs')


const content=fs.readFile('./myfile.txt',(error,data)=>{
    console.log(String(data))
})

console.log((content))