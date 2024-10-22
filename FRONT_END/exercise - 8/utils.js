// 1. String literal
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

function yearUntilRetirement(object) {
  const age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
}

// 2. Arrow function
const addNumber = (a, b, c, d, e, f, g) => {
  let numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  numbers.map((num) => (sum += num));
  return sum;
};

// 3. let & const
let phi = 3.14;

const calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};

// 4. Default parameter
const makeAjaxRequest = (url = "www.google.com", method = "GET") => {
  console.log(url, method);
};

export {
  calculateAge,
  yearUntilRetirement,
  addNumber,
  calculateArea,
  makeAjaxRequest,
};
