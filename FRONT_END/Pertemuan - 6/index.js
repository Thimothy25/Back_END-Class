//JavaScript Array

//Deklarasi Array
//cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5];//1-5 disebut Element Array
// console.log(numbers);

//cara 2. New Array
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//Tipe data yang bisa di simpan dalam Array
// let numbers = [1, 2, 3, 4, 5];//Number atau angka semua
// let students = ["JOhn", "Jane", "Bob"];//string
// let john =["John", 20, true, 80, 90, 100]//mixed
// console.log(john);

//Array Length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

//Mengakses element/data tertentu didalam Array
//Melalui index array. Index selalu dimulai dari 0
// console.log(numbers[3]); //3
// console.log(students[1]);//Jane
// console.log(john[2]);//true
// console.log(john[4]); //90

//Mengakses element/data terakhir dalam Array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers2[numbers2.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);
//1. toString() //dipisahkan dengan koma (,)
console.log(array.toString());
//2. join() //pisahkan string tapi bisa di atur (spasi, koma, -, dll)
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
//3. pop()
array.pop(); //menghapus index terakhir
console.log(array);
//4. push()
array.push("Selamat Pagi"); //menambah di index terakhir
console.log(array);
//5. shift()
array.shift(); //hapus index pertama
console.log(array);
//6. unshift()
array.unshift("Selamat pagi"); //tambah di index pertama
console.log(array);
//7. splice() [index, jumlah, item1, .., item2]
array.splice(3, 1); //hapus index ke 3
console.log(3, 0, 4, 5);
array.splice(3, 0, 4, 5);
console.log(array); // tambah 4, 5 di index ke-3
//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice()
let sayuran = makanan.slice(3, 6); //tomat, bayam, wortel
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian); //kedelai, kacang tanah, kacang polong
