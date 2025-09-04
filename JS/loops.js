// // // // // // // // // // // for loop 
// // // // // // // // // // // print 1 to 5
// // // // // // // // // // // for(let count = 1; count <= 5; count++){
// // // // // // // // // // // console.log("Hello JS")
// // // // // // // // // // // }

// // // // // // // // // // // sum of number 1 to 5
// // // // // // // // // // let sum = 0;
// // // // // // // // // // for(let count = 1; count <= 5; count++){
// // // // // // // // // //     sum = sum + count;
// // // // // // // // // // }
// // // // // // // // // // console.log("Sum of Numbers = ",sum)

// // // // // // // // // // while loop
// // // // // // // // // let i = 1;
// // // // // // // // // while(i <= 5){
// // // // // // // // //     console.log(i);
// // // // // // // // //     i++
// // // // // // // // // }

// // // // // // // // // do-while loop
// // // // // // // // let i = 1;
// // // // // // // // do{
// // // // // // // //     console.log(i);
// // // // // // // //     i++;
// // // // // // // // }while(i <= 5);

// // // // // // // // for-of loop use for string and arrays
// // // // // // // let str = "Ahmad"
// // // // // // // let length = 0;
// // // // // // // for(let val of str){
// // // // // // //     console.log("val = ",val);
// // // // // // //     length++;
// // // // // // // }
// // // // // // // console.log("length ",length);

// // // // // // // for-in loop use for object
// // // // // // let student = {
// // // // // //     name : "Ahmad",
// // // // // //     age : 21,
// // // // // //     CGPA : 3.52,
// // // // // //     isPass : true
// // // // // // }

// // // // // // for(let key in student){
// // // // // //     console.log("Key = ",key, "Value = ",student[key]);
// // // // // // }
 

// // // // // // Practice Question 1 Print all number from 0 to 100
// // // // // for(let i = 1; i <=100; i++){
// // // // //     if(i%2 !== 0){
// // // // //         console.log(i);
// // // // //     }
// // // // // }

// // // // let str1 = "apna college";
// // // // let str2 = "Ahmad";
// // // // console.log(str1.length)

// // // // let obj = {
// // // //     item : "pen",
// // // //     price : 25
// // // // }
// // // // let output = `The cost of the ${obj.item} is ${obj.price} rupees`;
// // // // // console.log(output);
// // // // console.log(str1.slice(3,7));

// // // let array = [1,3,4,6,6,67778888,5]

// // // for (let i = 0; i < array.length; i++) {
// // //     const element = array[i];
// // //     console.log(element);
// // //     console.log(array.length);
// // // }

// // // let obj = {
// // //     name : "Ahmad",
// // //     role : "Programmer",
// // //     age : 21
// // // }
// // // for (const key in obj) {
// // //     const element = obj[key];       
// // //     console.log(key,element);
// // // }

// // // for (const element of "Ahmad") {
// // //     console.log(element);
    
// // // }
// // // let res = add(5,3);
// // // function add(a,b) {
// // //     return(a+b);
// // // }

// // // console.log(res);

// // const devide = function (a,b){
// //     return a/b;
// // }

// const last = Arr =>{
//  return (Arr[Arr.length-2])
// }
// console.log(last([1,2,3,4,5,6]))

let n = "Ahmad"
console.log(n.toUpperCase());
console.log(n.toLocaleLowerCase());
console.log(n.slice(0,4));
console.log(n.replace("Ah",65));
console.log(n);
