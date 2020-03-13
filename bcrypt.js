const bcrypt = require('bcrypt');
const saltRounds = 10;

let myPlaintextPassword='saranya';
let hashGen;
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log("hashh", hash)
        hashGen= hash;
    });
});


setTimeout(function(){  
    bcrypt.compare(myPlaintextPassword, hashGen, function(err, res) {
        // res == true
        console.log("rreee", res)
    });
}, 500);
