//Asynchronous JS

//Synchronous -> single thread(proses) -> blocking
//Hanya dalam satu proses
//Menjalankan baris perbaris dan langsung di eksekusi pada saat itu juga
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu lama ");
// console.log("Proses 4");
//synchronous tidak bisa menunggu jadi jika ada proses yang memakan waktu lama
//maka akan terblock (jika memakan waktu yang lama)

//Asynchronous => multi thread (non blocking)
//multi thread = ada banyak proses.

//1. Parallel - berjalan secara parallel
//berjalan bersama"
// setTimeout(() => {
//   console.log("Proses 1");
// }, 5000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 3000);
// console.log("Proses 4");

//2. Concurrent - berjalan secara concurrent
//concurrency bisa dibuat dalam callback
//tidak berjalan bersama" tapi ada waktu menunggu
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
//1. cara buat promise
let condition = true;
// const myPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

//2. cara pakai promise
//1) then - catch (catch utk handle error)
// myPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));

//2. Async - await
//harus buat dalam fungsi
// const consumePromise = async () => {
//   let result = await myPromise;
//   console.log(result);
// };
// consumePromise();

//pakai promise yang sudah ada
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

const fetch = async () => {
  let result = await fetch;
  console.log(result);
};
fetch();

async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  json.forEach(({ name }) => console.log(name));
};
