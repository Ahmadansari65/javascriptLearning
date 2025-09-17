let name = "Ahmad";
console.log(name.length);
console.log(name[0]);
console.log(name[name.length - 1]);

let age = "";
let age1 = " ";
console.log(age.length);
console.log(age1.length);

// Question 1

let day = 9;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Sunday");
        break;
}

// Question 2

let num = 59;
if (num % 10 === 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

// Question 3

// let Name = prompt("Enter your Name");
// let Age = prompt("Enter your Age");
// let msg = `Your Name is ${Name} and Age is ${Age}`;
// alert(msg)

// Question 4

let Quater = 3;
switch (Quater) {
    case 1:
        console.log("January Feburary March");
        break;
    case 2:
        console.log("April May June");
        break;
    case 3:
        console.log("July August September");
        break;
    case 4:
        console.log("Octuber November December");
        break;
    default:
        console.log("error");
};

// Question 5

let string = "apple";
if ((string[0] === 'a' || string[0] === 'A') && string.length > 5) {
    console.log("Golden");
} else {
    console.log("Not");
}

// Question 6

let a = 4;
let b = 9;
let c = 7;

if (a > b) {
    if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// Question 7

let num1 = 32;
let num2 = 47852;
if ((num1 % 10) === (num2 % 10)) {
    console.log("Number have same last digit");
} else {
    console.log("Not same digit");
}

// Question 8

let msg = "     help!";
console.log(msg.trim().toUpperCase());

let na = "ApnaCollege";
console.log(na.slice(4).replace("l", "t").replace("l", "t"));

// Arrays in JS

let month = ["Jan", "July", "March", "August"];
month.splice(0, 2, "July", "June");
console.log(month);

// Nested Arrays;

let nums = [[1, 2], [3, 4], [4, 5]];
console.log(nums[2][1]);

// Question 9

let ticTac = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
ticTac[0][1] = "O";
console.log(ticTac);

// Question 10

let nElement = [7, 9, 0, -2];
let n = 3;
console.log(nElement.slice(0, 3));

// Question 11

let nnElement = [7, 9, 0, -2, 3, 4];
let nn = 3;
console.log(nnElement.slice(nnElement.length - nn));

// Question 12

let str = [];
if (str.length == 0) {
    console.log("String is empty");
} else {
    console.log("String is not empty");
}

// Question 13

let strr = "ApnAcollEGE";
let ind = 3;
if (strr[ind] == strr[ind].toLowerCase()) {
    console.log("Number is in Lower case");
} else {
    console.log("Number is not in Lower case");
}

// Question 14

let Str = "    Ahmad  ";
console.log(Str.trim());

// Question 15

let Arr = [2, 3, 4, 5, 6];
let item = 4;
if (Arr.indexOf(item) != -1) {
    console.log("Element Exist");
} else {
    console.log("Element not Exist");
}

// Question 16

for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}

// Question 17

for (let i = 3; i <= 30; i += 3) {
    console.log(i);
}

// Question 18

// let fav = "Avatar";
// let guess = prompt("Enter Movie Name");
// while ((guess!=fav) && (guess!="quit")) {
//     console.log("Wrong");
//     guess = prompt("Enter Movie Name");
// }
// if(guess == fav){
//     console.log("Congrats!")
// }

// Question 19

let heros = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder women", "flash"]
]
for (let i = 0; i < heros.length; i++) {
    console.log(i, heros[i], heros.length);
    for (let j = 0; j < heros[0].length; j++) {
        console.log(heros[i][j]);
    }
}

for (list of heros) {
    for (ero of list) {
        console.log(ero);
    }
}

// Question 20

let ar = [1, 2, 3, 4, 5, 6, 2, 3];
let nu = 2;
let index;
while ((index = ar.indexOf(2)) != -1) {
    ar.splice(index, 1);
}
console.log(ar);

// Question 21

let number = 287152;
let count = 0;
let copy = number
let sum = 0;
while (copy > 0) {
    count++;
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}
console.log(count);
console.log(sum);

// Question 22

let f = 5;
let fac = 1;
for (let i = 1; i <= f; i++) {
    fac *= i;
}
console.log(fac);

// Question 23

let aa = [11, 44, 24, 56, 3, 54];
let largest = aa[0];
for (let i = 0; i < aa.length; i++) {
    if (aa[i] > largest) {
        largest = aa[i];
    }
}
console.log(largest);

const Students = {
    name: "Ahmad",
    age: 22,
    marks: 100,
    city: "Kasur"
};
Students.city = "Lahore";
Students.gender = "Male";
Students.marks = [99, 88, 97];
delete Students.marks;
console.log(Students);

// const classInfo = {
//     Ahmad: {
//         grade: "A++",
//         city: "Kasur"
//     },
//     Rayyan: {
//         grade: "A+",
//         city: "Kasur"
//     },
//     Haseeb: {
//         grade: "A++",
//         city: "Lahore"
//     }
// };
// console.log(classInfo.Ahmad.grade);

const classInfo = [
    {
        name: "Ahmad",
        age: 22,
        city: "Kasur"
    },
    {
        name: "Rayyan",
        age: 20,
        city: "Lahore"
    },
    {
        name: "Haseeb",
        age: 21,
        city: "Kasur"
    }
];
classInfo[0].gender = "Male";
console.log(classInfo[0].gender);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 5) + 1);

// Question 24

