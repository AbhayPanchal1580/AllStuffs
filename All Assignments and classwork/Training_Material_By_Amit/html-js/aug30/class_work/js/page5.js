// type conversion

function anythingToString() {
    // number
    const num = 100

    // number
    const salary = 6.8789

    // boolean
    const canVote = true

    // number to string
    const strNum = String(num) // num.toString()
    console.log(`strNum = ${strNum}, type = ${typeof strNum}`)

    // number to string
    const strSalary = salary.toFixed(2)
    console.log(`strSalary = ${strSalary}, type = ${typeof strSalary}`)

    // boolean to string
    // const strCanVote = '' + canVote
    const strCanVote = `${canVote}`
    console.log(`strCanVote = ${strCanVote}, type = ${typeof strCanVote}`)
}

// anythingToString()


function stringToNumber() {
    const str1 = '10000'
    const str2 = '100.56'
    const str3 = '123abc123'

    // string to number
    const n1 =  Number(str1) // parseInt(str1)
    console.log(`n1 = ${n1}, type = ${typeof n1}`)

    // string to number
    const n2 = Number(str2) // parseFloat(str2)
    console.log(`n2 = ${n2}, type = ${typeof n2}`)

    const n3 = parseInt(str3)
    console.log(`n3 = ${n3}, type = ${typeof n3}`)

} 

stringToNumber()