//Rest Parameter & Spread Operator

//1.Rest Parameter //tipenya ARRAY
//digunakan pd saat kita ingin membuat fungsi
//yg memiliki banyak parameter

//fungsi TANPA rest parameter //outputnya didefinisikan satu"
const func1 = (param1, param2, param3, param4, param5) => {
  console.log(param1, param2, param3, param4, param5);
};
func1("A", "B", "C", "D", "E");

//fungsi DENGAN Rest Parameter
const func2 = (...params) => {
  console.log(params);
};
func2("A", "B", "C", "D", "E");

//Rest parameter harus berada di terakhir parameter
//Jadi sisanya kita bungkus di terakhir
const func3 = (params1, params2, ...params) => {
  console.log(params1, params2);
  console.log(params);
};
func3("A", "B", "C", "D", "E");

//Mini Exercise
const penjumlahan = (a, b, c, d, e, f) => {
  let arr = [a, b, c, d, e, f];
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};
console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//Modifikasi menggunakan rest parameter
const jumlah = (...array) => {
  let hasil = 0;
  array.forEach((item) => (hasil += item));
  return hasil;
};

console.log(jumlah(1, 2, 3, 4, 5, 6));

//2.Spread Operator
//digunakan pd array & object dimana tujuannya untuk
//memecah array/object menjadi element2 kecil pembentuknya

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//menggunakan spread operators
console.log(...numbers);
//Kegunaan spread operator
//1.utk duplikasi array
let numbers2 = [...numbers];
console.log(numbers2);
//2) utk menggabungkan array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let number3 = arr1.concat(arr2, arr3); //ES5
let number4 = [...arr1, ...arr2, ...arr3]; //ES6

//Object
const John = {
  fullName: "John Doe",
  age: 30,
};

//kegunaan spread operator
//1. duplikasi object
const John2 = { ...John, address: "Manado" };

//2.menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { e: 5, f: 6 };

let combinedObj = { ...obj1, ...obj2, ...obj3 };
