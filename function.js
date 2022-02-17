/**
 * Function
 */

function sum(str) {
  var result = str.replace("a", "e");
  return result.toUpperCase();
}

// console.log(sum('merray'));

/**
 * var let const
 */

var name = "john leo"; // functional scope
var name = "anis";

let age = 30;
age = 25;

const pi = 3.1416; 

// console.log(pi);

let cbf=function(result){
  console.log(result);
}

function myFunc(num1, num2, cb) {
  let sum= num1+num2;
  sum+=50; // sum= sum+50
  cb(sum)
}

myFunc(2,3,cbf)
myFunc(30,35,function(result){
  console.log( result);
})