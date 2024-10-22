// APRILLIA MONONUTU
//  EXERCISE 4

//i. ARRAY EXERCISE
console.log("i. ARRAY EXERCISE");
let people = ["Greg", "Mary", "Devon", "James"];

//1. forLoop() untuk menampilkan semua people
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2. forEach() untuk menampilkan
people.forEach(function (item, index) {
  console.log(item);
});

//3. remove "Greg" di index pertama menggunakan shift()
people.shift(); //hapus index pertama
console.log(people);

//4. remove "James" di index terakhir menggunakan pop()
people.pop(); //menghapus index terakhir
console.log(people);

//5. add "Matt" di depan menggunakan unshift()
people.unshift("Matt"); //tambah di index pertama
console.log(people);

//6.add "my name" aka "April" di akhir
//      menggunakan push()
people.push("April"); //menambah di index terakhir
console.log(people);

//7. gunakan forLoop()
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//8. gunakan slice() NOT include "Mary" or "Matt"
let PeopleNew = people.slice(2);
console.log(PeopleNew);

//9. gunakan splice, remove "Devon"
//   dan add "Elizabeth" and "Artie"
console.log(people);
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10. variabel baru withBob
withBob = people.concat("Bob");
console.log(people);
console.log(withBob);

console.log("\n============================================================\n");

//ii. OBJECT EXERCISE
console.log("ii. OBJECT EXERCISE");
let programming = {
  languages: ["Javascript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//1. add language "Go" di akhir gunakan push()
programming.languages.push("Go"); //menambah di index terakhir
console.log(programming.languages);

//2. gunakan bracket notation,
//   ganti difficulty dari 8 ke 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3. gunakan delete untuk menghapus jokes
delete programming.jokes;
console.log(programming);

//4. gunakan dot notation, add isFun dan value true
programming.isFun = true;
console.log(programming);

//5. gunakan map() dan update setiap element menjadi
// "0 - JavaScript, 1 - Python, ..." gunakan index 0
// untuk merepresentasikan string didalam languages
console.log(
  programming.languages.map((language, index) => {
    return index + " - " + language;
  })
);
