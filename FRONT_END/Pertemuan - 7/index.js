//JavaScript Object & Conditional
//Deklarasi Object
//Object Literal
let john = {
  firstName: "John", //Properti & Value//Attribut
  age: 30,
  isMarried: true,
  grade: [80, 90, 100],
  sayGreetings: function () {
    console.log("Hello my name is" + this.firstName);
  }, //OBJECT METHOD
  address: {
    street: "Jl.Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
    postalCode: "95371",
  }, //object di dalam object
};
console.log(john);

//Mengakses properti didalam Object
//1. Dot notation
console.log(john.firstName); //john
console.log(john.age); //30
john.age = 31; //ubah nilai (umur john jadi 31)
console.log(john);
john.job = "Teacher"; //tambah properti baru
console.log(john);

//2. Bracket notation
console.log(john["isMarried"]); //true
john["Nationality"] = "Indonesia"; //Tambah properti baru
console.log(john);

//Object Method
john.sayGreetings();

//Object inside object
console.log(john.address.city);

//Delete property object
delete john.grade;
console.log(john);

//JavaScript Conditional (Berakar)
//1. if - else

//if temperature > 37 tampilkan cuaca panas
//else tampilkan cuaca dingin
temp = 37;
if (temp >= 37) {
  console.log("Cuaca hari ini panas");
} else {
  console.log("Cuaca hari ini dingin");
}
//2. if - else, if - else
//Jika nilai 100-80 grade A
//Jika nilai 80-70 grade B
//Jika nilai 70-50 grade C
//Jika nilai < 50 grade D

let nilai = 85;
if (nilai >= 80 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Grade B");
} else if (nilai >= 50 && nilai < 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

//Switch and Case
//1. tampilkan januari
//2. tampilkan februari
//3. tampilkan maret
//4. tampilkan april
//... tampilkan desember

let month = 12;
switch (month) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("Februari");
    break;
  case 3:
    console.log("Maret");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Not found");
    break;
}
