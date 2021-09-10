const {readFile, writeFile} = require('fs')
// const fs = requires('fs') 
// fs.readFileSync
console.log('Start')

 readFile('./content/first.txt', 'utf8' ,(err,result) => {
     if (err) {
            console.log(err)
            return
     }

     console.log(result)
     const first = result

     readFile('./content/second.txt','utf8', (error,result) => {
        if (err) {
                console.log(err)
                return
            }

        const second = result
        console.log(second)

        writeFile('./content/result-async.txt',`Here is the async result: ${first}, ${second} `,(err,result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
            console.log('done with this task')
        })
     })
     
 })

 console.log('Starting next task')
