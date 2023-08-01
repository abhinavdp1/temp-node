const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in sedonds
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    releaseos: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);