const accountId = 144722
let accountEmail = "abhi@gmail.com"
var accountPassword = "123445"
accountCity = "Delhi"
let accountState;

accountEmail = "abhinav@gmail.com"
accountPassword = "272727"
accountCity = "Bihar"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);