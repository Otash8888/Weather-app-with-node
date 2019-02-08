L-26. Async Basics

setTimeout(() => {
  //waits 2 sec and then executes code inside this func
  // it does not block the execution
},2000)
/*
// -Call Stacks-
 1. main()
 then all funcs inside the file
// Node API
setTimeout func is Node API
// -Callback Queue-
from NOde API it goes to -Callback Queue-
// Event Loop
after executing all codes in side the file, checks if  -Call Stacks- doesn't have codes to execute, then it switchs to methods in -Callback Queue-
*/


L-27. Callback functions and APIs

//https://maps.googleapis.com/maps/api/geocode/json?address=1772%2046th%20street%20brooklyn

//need -request- package
//npmjs.com/package/request

npm init
//enter multi. times get default values
npm install request --save
//
//in app.js we wrote the code with request

L-28.Readable formating

JSON.stringify(body, undefined, 2))

L-29. What's makes up HTTP request

//we did error and responde print out on console
L-30.


let batches = (recipe, available) => {





}
