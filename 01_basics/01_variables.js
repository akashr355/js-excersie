const accountId = 12345
let accountEmail = "akash@gmail.com"
var accountPass = "123456"
accountCity = "Ahmedabad"
let accountState;

// accountId = 67890 // not allowed

accountEmail = "akash.yahoo.com"
accountPass = "54321"
accountCity = "Patan"

/*
Prefer not to use var
Because of block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState]);
