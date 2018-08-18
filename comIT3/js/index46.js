const  userAndPassword = 'pepito2017,12345';
const userName = userAndPassword.substr(0,10);
const passWord = userAndPassword.substr(11,5);
console.log(`The user ${userName} has ${passWord} as password`);