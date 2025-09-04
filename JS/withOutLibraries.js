const num = [10,20,30,40];

// myShift()

function myShift(arr){
    if(arr === 0){
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

function myPop(arr){
    if(arr === 0){
        return undefined;
    }
    const last = arr[arr.length-1];
    arr.length = arr.length - 1
    return last;
}
console.log(myPop(num));
console.log(num);

// myUnShift()

function myUnShift(arr, value){
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr.length;
}

console.log(myUnShift(num,10));
console.log(num);

// myPush()

function myPush(arr,value){
    arr[arr.length] = value;
    return arr.length;
}
console.log(myPush(num,40));
console.log(num);

// myIndexOf()

function myIndexOf(arr,value){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(num,40));

// latIndexOf()

function myLastIndexOf(arr,value){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
console.log(myLastIndexOf(num,30));

// myIncludes()

function myIncludes(arr,value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return true;
        }
    }
    return false;
}
console.log(myIncludes(num,30));
