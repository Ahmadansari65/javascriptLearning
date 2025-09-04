// let a = [1,2,3,4,44,565,33,65];
//  a.forEach((vale, index, arr) => {
//     console.log(vale,index);
//  });

//  let obj = {
//     a : 3,
//     b : 5,
//     c : 6,
//  }
//  for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
//  }

//  for (const value of a) {
//     console.log(value);
//  }

// let newArr = [];
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     newArr.push(element ** 2);
// }
// console.log(newArr)

// let newAr = a.map((e)=>{
//     return e ** 2;
// }) 
// console.log(newAr);



// let arr2 = [1,2,3,4,5,6]

const red = (a)=>{
    let fac = 1;
    for (let i = a; i > 0; i--) {
        fac = fac * i;
    }
    return fac
}

// console.log(red(6));

// Methods of Array

let arr = [10,20,30,40,50,60];

console.log(arr.length);
console.log(arr)

console.log(arr.shift());
console.log(arr)

let arrr = [1,2,3,4];
console.log(arrr)
console.log(arrr.unshift(70));

let p = [1,2,3,4];
console.log(p.pop());
console.log(p.push(5,8));

let i = [1,2,3,4];
console.log(i.includes(3));
console.log(i.includes(10));

let j = [1,2,3,4];
console.log(j.join(" "))

let con = [1,2,3,4];
console.log(con.concat(20,30))

let fo = [1,2,3,4];
fo.forEach(function(value,index,arra){
    console.log(value,index,arra);
})


let eve = [10,20,30,40,50,60];
let ev = eve.every(function(value,index){
    return value <= 60;
})
console.log(ev);

let sli = [10,20,30,40,50,60];
console.log(sli.slice(2,6))

let spl = [10,20,30,40,50,60];
console.log(spl.splice(1,0,100,200,300));
console.log(spl);

console.log(spl.reverse());
console.log(spl);

let sqr = [2,4,6];
sqr.forEach(x => console.log(x*x));

let even = [2,4,6,8];
console.log(even.every(x => x%2 === 0))
console.log(even.some(x => x>5))

let fill = [5, 12, 8, 130, 44]
let newFil = fill.filter(x => x>10)
console.log(newFil)

let sp = [1, 2, 3, 4, 5]
console.log(sp.splice(2,1));
console.log(sp)

const pro = [1,2,3,4];
let double = pro.map(x => x*2);
let fil = double.filter(x => x>4);
let redu = fil.reduce((a,b) => a+b);
console.log(double);
console.log(fil);
console.log(redu);

function removeDuplicate(a){
    return a.filter((x,y) => a.indexOf(x) === y);
}
console.log(removeDuplicate([1,2,2,2,3,4,5]));


/*
Methods of Array
    1. length   return number
    2. shift()  return first element
    4. pop()    return last element
    5. unshift(10) re
    6. push(10)
    7. indexOf
    8. lastIndexOf
    9. includes
    10. join    (string)
    11. reverse (array)
    12. concat  (array)
    13. forEach 
    14. every
    15. some
    16. filter
    17. slice
    18. splice
    19. map
    */