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
