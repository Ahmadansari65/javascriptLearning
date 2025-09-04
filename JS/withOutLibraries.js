const num = [10, 20, 30, 40];

// myShift()

function myShift(arr) {
    if (arr === 0) {
        return undefined;
    }
    const first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return first;
}

console.log(num);
console.log(myShift(num));
console.log(num.length);
console.log(num);

// myPOP()

function myPop(arr) {
    if (arr === 0) {
        return undefined;
    }
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1
    return last;
}
console.log(myPop(num));
console.log(num);

// myUnShift()

function myUnShift(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr.length;
}

console.log(myUnShift(num, 10));
console.log(num);

// myPush()

function myPush(arr, value) {
    arr[arr.length] = value;
    return arr.length;
}
console.log(myPush(num, 40));
console.log(num);

// myIndexOf()

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(num, 40));

// latIndexOf()

function myLastIndexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(myLastIndexOf(num, 30));

// myIncludes()

function myIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes(num, 30));

// myJoin()

function myJoin(arr, seprator = ",") {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i !== arr.length - 1) {
            str += seprator;
        }
    }
    return str;
}
console.log(myJoin(num, "+"))

// myReverse()

function myReverse(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
// console.log(myReverse(num));

// myConcat()

function myConcat(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result[result.length] = arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        result[result.length] = arr2[j];
    }
    return result;
}

console.log(myConcat(num, [6, 7, 8, 9]));

//  find Largest Number

const largest = (arr) => {
    let max = arr[0];
    for(let i = 0; i< arr.length; i++){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(largest([4,7,3,9,5,6,7,8,10,1,2]));

// find Smallest number

const Smallest = (arr) => {
    let min = arr[0];
    for(let i = 0; i< arr.length; i++){
        if(min >= arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(Smallest([4,7,3,9,5,6,7,8,10,1,2]));

// sum of array

const sum = (arr) => {
    let Sum = 0;
    for(let i=0; i<arr.length; i++){
     Sum += arr[i];
    }
    return Sum;
}
console.log(sum([1,2,3,4,5]));

// Count Even Odd

const countEO = (arr) => {
    let c =0, o = 0;
    for(let i = 0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            c++;
        }else{
            o++
        }
    }
    return{
        even: c,
        odd: o,
    };
}
console.log(countEO([1,2,3,4,5]));

// Remove duplicate from Array

const removeDuplicate = (arr) => {
    let result = [];
    for(let i = 0; i<arr.length; i++){
        let j;
        for( j = 0; j<result.length; j++){
            if(arr[i] === result[j]){
                break;
            }
        }
        if(j === result.length){
            result[result.length] = arr[i];
        }
    }
    return result;
}
console.log(removeDuplicate([1,2,2,3,4,4,5]));