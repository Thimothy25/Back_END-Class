//Aprillia Mononutu
//  Exercise 2
//function menghitung BMI

//      EXERCISE 1      //
//let BMI = function(){
//     let rumus = berat / (tinggi*tinggi);
//     return rumus
// }
// let tinggi = 1.6;
// let berat = 63;
// let output = BMI(tinggi,berat);
// console.log(output);

//      EXERCISE 2      //
//USE IIFE and CALLBACK

//1. IIFE with params & args & return value
let BMI = (function (tinggi, berat) {
  let rumus = berat / (tinggi * tinggi);
  return rumus;
})(1.6, 63);
console.log(BMI);

//2. CallBack with params & args & return value
function hitungBMI(tinggi, berat, callback) {
  let rumus = berat / (tinggi * tinggi);
  return callback(rumus);
}
let tinggi = 1.6;
let berat = 63;
let output = hitungBMI(tinggi, berat, function (hasil) {
  return hasil;
});

console.log(output);
