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
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(largest([4, 7, 3, 9, 5, 6, 7, 8, 10, 1, 2]));

// find Smallest number

const Smallest = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(Smallest([4, 7, 3, 9, 5, 6, 7, 8, 10, 1, 2]));

// sum of array

const sum = (arr) => {
    let Sum = 0;
    for (let i = 0; i < arr.length; i++) {
        Sum += arr[i];
    }
    return Sum;
}
console.log(sum([1, 2, 3, 4, 5]));

// Count Even Odd

const countEO = (arr) => {
    let c = 0, o = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            c++;
        } else {
            o++
        }
    }
    return {
        even: c,
        odd: o,
    };
}
console.log(countEO([1, 2, 3, 4, 5]));

// Remove duplicate from Array

const removeDuplicate = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let j;
        for (j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                break;
            }
        }
        if (j === result.length) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// Rotate Array K times

const rotateArray = (arr, k) => {
    let n = arr.length;
    k = k % n;
    for (let r = 0; r < k; r++) {
        last = arr[n - 1];
        for (let i = n - 1; i > 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = last;
    }
    return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// sortArray()

const sortArray = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(sortArray([5, 2, 9, 1, 6, 5]))

// find Seconnd largest number in Array

const secondLargest = (arr) => {
    let largest = -Infinity, Seconnd = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            Seconnd = largest;
            largest = arr[i];
        } else if (arr[i] > Seconnd && arr[i] !== largest) {
            Seconnd = arr[i];
        }
    }
    return Seconnd;
}
console.log(secondLargest([10, 5, 8, 20, 15]));

// remove negative numbers from array

const removeNegative = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
console.log(removeNegative([3, 2, -3, -5, 6, 7]));

// frequency count of element

const frequencyCount = (arr) => {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        if (freq[key] === undefined) {
            freq[key] = 1;
        } else {
            freq[key]++;
        }
    }
    return freq;
}
console.log(frequencyCount([1, 2, 2, 3, 1, 4]));

// split an array into two halves

const splitArrayInTwoHalves = (arr) => {
    let mid = Math.floor(arr.length / 2);
    let firstHalve = [];
    let secondHalve = [];
    for (let i = 0; i < mid; i++) {
        firstHalve[firstHalve.length] = arr[i];
    }
    for (let j = mid; j < arr.length; j++) {
        secondHalve[secondHalve.length] = arr[j];
    }
    return [firstHalve, secondHalve];
}
console.log(splitArrayInTwoHalves([1, 2, 3, 4, 5, 6]));

// third largest number in array

const thirdLargesrNumber = (arr) => {
    let largest = -Infinity, seccond = -Infinity, third = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            third = seccond;
            seccond = largest;
            largest = arr[i];
        } else if ((arr[i] > seccond) && arr[i] !== largest) {
            seccond = arr[i];
        } else if (arr[i] > third && arr[i] !== largest && arr[i] !== seccond) {
            third = arr[i];
        }
    }
    return third;
}
console.log(thirdLargesrNumber([2, 5, 3, 4, 7, 8, 12, 6]));

const isSorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5]));

// Intersection of two Array

const Intersection = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                let exist = false;
                for (let k = 0; k < result.length; k++) {
                    if (result[k] === arr1[i]) {
                        exist = true;
                        break;
                    }
                }
                if (!exist) {
                    result[result.length] = arr1[i];
                }
            }
        }
    }
    return result;
}
console.log(Intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 8]));