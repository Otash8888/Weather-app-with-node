console.log('start');

setTimeout(() => {
  console.log('Inside timeOut 2 sec');
},2000)

setTimeout(() => {
  console.log('Inside timeOut o sec');
},0)

console.log('finish');





//in terminal

//node playground/async-basics.js
//results on terminal console
/*
start
finish
Inside timeOut o sec
Inside timeOut 2 sec
*/
