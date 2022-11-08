const fs=require('node:fs')


const content=fs.readFile('./myfile.txt',(error,data)=>{
    if(error){
        console.log('Throwing error')
    }else{
        console.log(String(data))
    }
})
