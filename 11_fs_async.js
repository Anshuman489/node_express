const {readFile, writeFile} = require ('fs')

// console.log("start")

// readFile('./content/first.txt','utf8', (err, result)=>{
//   if (err){
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt','utf8',(err,result)=>{
//     if (err){
//     console.log(err)
//     return
//   }
//   const second = result
//     writeFile('./content/result-async.txt',
//     `Here is the result\nfirst: ${first}\nsecond: ${second}`,
//     (err, result)=>{
//       if (err){
//         console.log(err)
//         return
//       }
//       console.log("done with this task")
//     }
//   )
//   })
// })
// console.log("starting with the next task")

//solving callback hell using promises

const loadData = (path, encoding)=>{
  return new Promise ((resolve, reject)=>{
    readFile(path, encoding, (err, result)=>{
      if (err){
        console.log(err)
        reject(err)
      }
      resolve(result)
    })
    
  })
}

let p1 = loadData('./content/first.txt', 'utf8')

p1.then((value)=>{
  console.log(value)
  return loadData('./content/second.txt', 'utf8')
}).then((value)=>{
  console.log(value)
}).catch((err)=>{
  console.log(err)
  console.log("Path not found/ encoding not set right...")
})



