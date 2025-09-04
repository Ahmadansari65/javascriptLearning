const print = function(a,b){
    console.log(a,b)
}

print("Ahmd","Ansari");

// rest parameter functions

function restPara(x,...y){
    console.log(x)
    console.log(y)
}
restPara(1,2,3,4,5,6,7,8,9)

// Nested function
function outer(){
    console.log("Outer");
    function inner(){
        console.log("Inner");
    }
    inner();
    console.log("Outer");
}

outer();

// Closure
function outerr(x){
    function innerr(y){
        return x+y;
    }
    return innerr;
}

const outerReturn = outerr(10);
console.log(outerReturn(50));

const square = function(a){
    return a**2;
}
console.log(square(3));

const isEven = (e) =>{
    if(e%2 === 0){
        console.log("even");
    }
}
isEven(12);

function sumAll(...x){
    let element = 0;
    for (let i = 0; i < x.length; i++) {
         element = element + x[i];
    }
    return element;
}
console.log(sumAll(1,2,3,4,5,6));

function makeCounter(){
    let counter = 0;
    function increment(){
        counter++;
        return counter;
    }
    return increment;
}
const counterr = makeCounter();
console.log(counterr());
console.log(counterr());
console.log(counterr());

const max = function(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(max(15,9));

function power(base, exponent = 2){
    return base ** exponent;
}
console.log(power(2,3));
console.log(power(2));

const greetMaker = (greeting) => (name) => `${greeting}, ${name}!`;
const sayHello = greetMaker("Hello");
console.log(sayHello("Ahmad"));
console.log(sayHello("Rayyan"));

// Higher Order Function

const radius = [3,1,2,4];

const area = function (radius){
    return Math.PI * radius * radius;
}
const circumferece = function (radius){
    return 2 *Math.PI * radius;
}
const diameter = function (radius){
    return 2 * radius;
}

const calculate = function (radius, logic){
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumferece));
console.log(calculate(radius,diameter));

// HOF whith map()

let numbers = [1,2,3,4,5];
let squares= numbers.map(num => num**2);
console.log(squares);
console.log(numbers);

let Name = ["ahmad","rayyan","ali"];
let upperName = Name.map(na => na.toUpperCase())
console.log(upperName);

//HOF with filter()

let nums = [1,2,3,4,5,6];
let even = nums.filter(n => n%2 === 0)
console.log(even);

// Reduce

let arr = [10,20,30,40];
let sum = arr.reduce((act,nu) => act + nu);
console.log(sum);

function applyOperation(arr,operation){
    return arr.map(operation);
}

console.log(applyOperation([1,2,3,4,5], x => x*2));
console.log(applyOperation([1,2,3,4,5], x => x**2));

function myFilter(ar,fn){
    let result = [];
    for(let item of ar){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

console.log(myFilter([1,2,3,4],x => x%2 === 0));

const students = [
    {name : "Ali", grade : 85},
    {name : "Sara", grade : 42},
    {name : "Zara", grade : 73},
];

const pass = students.filter(s => s.grade >= 50);
console.log(pass);

const names = pass.map( n => n.name);
console.log(names);
