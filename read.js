const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(``, input => {
    console.log(typeof input)
    readline.close()
  })
  