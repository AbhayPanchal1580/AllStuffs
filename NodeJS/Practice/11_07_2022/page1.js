const Module = require("module")

function add(p1,p2){
    console.log(`${p1+p2}`)
}

const subtract=(p1,p2)=>{
console.log(p1-p2)
}

// console.log(module)

module.exports={addFunction:add,
    subtractFunction:subtract
}

