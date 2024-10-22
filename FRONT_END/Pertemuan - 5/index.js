//IIFE dan Callback function
//1. IIFE (Immediately Invoked Function Expression)
//No params & arguments & return value
// (function(){
//     console.log("Hello World!");
// })();

// With params & arguments & return value
// let output = (function(fullName){
//     return "hello" + fullName;
// })("Aprillia Mononutu");
// console.log(output);

//2.Callback
//(function yg kita panggil akan memanggil another function)
//No params & arguments & return value
// function sayHello(callback){
// //Logic
//     callback();
// }

// sayHello(function (){
//     console.log("Hello World");
// })
//function yg selalu dikirim sbg arguments = annonymous functin//
//annonymous function adalah function yg tidak memiliki nama//

// With params & arguments & return value
function sayHello(callback) {
  //Logic
  let output = callback("Aprillia");
  return output;
}

let output = sayHello(function (fullName) {
  return "Hello" + fullName;
});
console.log(output);
