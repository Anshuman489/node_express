const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);


//method returns system uptime in secs
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
  name : os.type(),
  release : os.release(),
  tm :os.totalmem(), //bytes
  fm : os.freemem()  //bytes
}

console.log(currentOS)