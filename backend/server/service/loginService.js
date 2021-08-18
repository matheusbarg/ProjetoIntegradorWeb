  
const loginData = require('../data/loginData');

exports.auten = function(user) {
   return loginData.autenUser(user);
}