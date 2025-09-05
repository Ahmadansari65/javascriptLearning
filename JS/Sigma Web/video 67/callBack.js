function sum(a, b) {
    console.log(a + b);
}

function calculatior(a, b, sumCall) {
    sumCall(a, b);
}
calculatior(1, 2, sum);

const hello = () => {
    console.log("Hello");
}
setTimeout(hello, 3000);

function getData(dataID, getNextdata) {
    setTimeout(() => {
        console.log("Data :", dataID);
        if (getNextdata) {
            getNextdata();
        }
    }, 4000)
}

// callBack Hell
getData(1, () => {
    console.log("getting data 2")
    getData(2, () => {
        console.log("getting data 3")
        getData(3, () => {
            console.log("getting data 4")
            getData(4);
        });
    });
});