//Aprillia Mononutu
//   EXERCISE 6

// Ubahlah syntax ES5 pada file berikut ke dalam ES6 untuk topik:
// 1. let & const
// 2. String literal
// 3. Arrow Function
// 4. Default parameter

//1.
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (year, firstName) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};
yearUntilRetirement((year = 1987), (firstName = "John"));

//2.
const addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  numbers.map((num) => (sum += num));
  return sum;
};
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3.
let phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
const area21 = calculateArea({ radius: radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius: radius, power: 2 });

console.log(
  `Area with 21 radius = ${area21}, and area with 7 radius = ${area7}`
);

//4
const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
