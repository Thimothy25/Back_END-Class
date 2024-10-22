//    EXERCISE 7
//Aprillia Mononutu
// DESTRUCTURING

// Pelajari konsep destructuring dan buat contoh:
// - Destructuring (Array & Object)
// - Destructuring dengan mengambil sebagian item (Array & Object)
// - Destructuring dengan menggunakan default value (Array & Object)
// - Destructuring dengan menggunakan rest operator (Array & Object)
// Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.

1;
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

2;
const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

radius = 21;
const area21 = calculateArea({ radius, power });
radius = 7;
const area7 = calculateArea({ radius, power });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

4;
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
