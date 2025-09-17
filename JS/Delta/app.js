const max= prompt("Enter thr max Number");
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the Number");

while (true) {
    if (guess == "quit") {
        console.log("User Quit");
        break;
    }
    if(guess == random){
        console.log("You are right Congrats!!");
        break;
    }else{
        guess = prompt("Guess the Number");
    }
}