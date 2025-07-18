const jwt = require("jsonwebtoken")

const payLoad = {
     userId : "Tirth9978" , 
     role : "Admin"
};

const secretKey = 'mySuperSecretKey';

const token = jwt.sign(payLoad , secretKey )

console.log(token)
