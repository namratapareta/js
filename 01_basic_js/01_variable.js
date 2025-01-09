const accountID = 12345
let accountEmail= "namrata@gmail.com"
var accountPassword = "12345"
accountCity = "BAngalore"

//accountID = 2 //this is not allowed in constant
accountEmail = "n@g.com"
accountPassword = "123"
accountCity = "Indore"
let accountState; //o/p undefine 
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountID);
console.table([accountEmail,accountPassword,accountCity])