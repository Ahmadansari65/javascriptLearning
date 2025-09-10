// function sum(a, b) {
//     console.log(a + b);
// }

// function calculatior(a, b, sumCall) {
//     sumCall(a, b);
// }
// calculatior(1, 2, sum);

// const hello = () => {
//     console.log("Hello");
// }
// setTimeout(hello, 3000);

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },3000)
//     });
// }

// async function getWeather(){
//     await api();
//     await api();
// }

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data :", dataID);
//             resolve("Success");
//         }, 3000)
//     });
// }

// Async Await
// async function getAllData() {
//     getData(1);
//     getData(2);
//     getData(3);
// }

// Promise Chain

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     })

// callBack Hell
// getData(1, () => {
//     console.log("getting data 2")
//     getData(2, () => {
//         console.log("getting data 3")
//         getData(3, () => {
//             console.log("getting data 4")
//             getData(4);
//         });
//     });
// });


// Promises

// const getPromise = () => {
//     return new Promise((resolve, reject)=> {
//     console.log("I am a promise")
//     resolve("delivered");
//     // reject("Network Error");
// });
// }
// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise successful",res);
// });

// promise.catch((err)=> {
//     console.log("Rejected",err);
// })


// function asynchFun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("Success");
//         }, 4000);
//     });
// }

// function asynchFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("Fetching Data 1");
// asynchFun1().then((res) => {
//     console.log("Fetching Data 2");
//     asynchFun2().then((res) => { })
// })

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback("Here is your data");
  }, 2000);
}

fetchData((data) => {
  console.log("Callback executed with:", data);
});

