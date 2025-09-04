console.log("Hello World");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red"



document.getElementById("redbox").style.backgroundColor = "green";
document.querySelector(".box").style.backgroundColor = "red"
// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "red"
// });
// document.getElementsByTagName("dic")


document.getElementById
let a = 6;
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a,b) => {
        return a*b;
    })
    console.log(c)
}
factorial(a);