// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college";
// console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
console.log(divs);

let index = 1;
for(val of divs){
    val.innerText = `new  value ${index}`;
    index++;
}

// divs[0].innerText = "New value 1";
// divs[1].innerText = "New value 2";
// divs[2].innerText = "New value 3";