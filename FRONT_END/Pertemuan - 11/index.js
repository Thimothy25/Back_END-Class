//JavaScript ES6
//STRING LITERAL, ARROW FUNCTION, DEFAULT PARAMETER
//utk mempermudah menulis program

// //1. STRING LITERAL
let fullName = "John Doe";
let age = 30;
let address = "Manado";
// Halo nama saya JOhn Doe, umur saya 30  tahun
// dan saya tinggal di Manado
//di es 5 (kita string concat)
let kalimat1 =
  "Halo nama saya " +
  fullName +
  ",umur saya 30 tahun" +
  age +
  " dan saya tinggal di" +
  address;
console.log(kalimat1);
//di ES 6 muncul STRING LITERAL pakai ``
let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

//2. Arrow Function
function sayGreetings1(fullName) {
  return `Hello my name is ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = () => {
  return `Hello my name is ${fullName}`;
};
console.log(sayGreetings2("John Doe"));

//implicit return value dari Arrow function
const sayGreetings3 = () => `Hello my name is ${fullName}`;
console.log(sayGreetings3("John Doe"));

//Arrow function pada IIFE
let output1 = (() => `Hello`)();

//Arrow function pada Callback Func
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3.DEFAULT PARAMETER
const sayGreetings4 = (fullName, age) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  if (!address) {
    address = "Manado";
  }
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`
  );
};
sayGreetings4("Aprillia", 20, "Manado");

const sayGreetings5 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Halo nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address}`
  );
};
sayGreetings5();
