// let marks = [85,97,44,37,76,60];
// console.log(marks);

// for(let i = 0; i < marks.length ; i++){
//     console.log("Marks = ",marks[i]);
// }

// loop-of array
// let sum = 0;
// for(let el of marks){
//     sum = sum + el;
//     console.log(el);
// }
// let avg = sum / marks.length;
// console.log(avg);

// Q2
let item = [250,645,300,900,50];
// let i = 0;
// for(let val of item){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`after discount =  ${item[i]}`);
//     i++;
// }

for(let i = 0; i < item.length; i++){
    let offer = item[i] / 10;
    item[i] = item[i] - offer;
}
console.log(item);