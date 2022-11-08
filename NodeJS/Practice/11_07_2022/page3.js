// import the module named os
const os = require('node:os')

console.log(`os name = ${os.platform()}`)
console.log(
  `total memory = ${os.totalmem()} bytes, ${
    os.totalmem() / (1024 * 1024 * 1024)
  }GB`
)
console.log(
  `free memory = ${os.freemem()} bytes, ${
    os.freemem() / (1024 * 1024 * 1024)
  }GB`
)
const cpus = os.cpus()
console.log(`no of cpus = ${cpus.length}`)
console.log(`architecture = ${os.arch()}`)
console.log(`home directory = ${os.homedir}`)
console.log(`hostname = ${os.hostname}`)
