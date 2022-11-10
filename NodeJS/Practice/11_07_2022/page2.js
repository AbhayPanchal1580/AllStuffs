// import the exported items from the other module
// returns the reference to the exported items from page3`
const page1 = require('./page1')

// call the function(s) from page3
page1.addFunction(10, 20)
page1.subtractFunction(20, 30)

// use the variable/constant from page3
// console.log(`pi = ${page1.pi}`)
