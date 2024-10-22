//Aprillia Mononutu
//   Exercise 3
//Buatlah object dengan properti:
// 1. firstName,
// 2. weight
// 3. height
// 4. function calculateBMI (gunakan tabel diberikut untuk menampilkan hasil)

let BMI = {
  firstName: "Aprillia",
  berat: 63,
  tinggi: 1.64,
  hitungBMI: function () {
    let BMI = this.berat / (this.tinggi * this.tinggi);
    if (BMI < 16.0) {
      console.log("Severely Underweight");
    } else if (BMI > 16.0 && BMI <= 18.4) {
      console.log("Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.0) {
      console.log("Normal");
    } else if (BMI >= 25.0 && BMI <= 29.9) {
      console.log("Overweight");
    } else if (BMI >= 30.0 && BMI <= 34.0) {
      console.log("Moderately Obese");
    } else if (BMI >= 35.0 && BMI <= 39.9) {
      console.log("Severely Obese");
    } else {
      console.log("Morbidly Obese");
    }
  },
};
console.log(BMI);
console.log(BMI.hitungBMI());
