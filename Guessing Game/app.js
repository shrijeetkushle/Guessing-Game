const max =prompt("Enter the Max Number :");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the Number :");

while(true){

    if(guess=="quit"){
        console.log("You Quit the Game!");
        break;
    }

    if(guess==random){
        console.log("Yout right. Congratulation!!");
        break;
    }else if(guess<random){
        guess=prompt("Your're guess is small. try again ");
    }else{
        guess=prompt("Your're guess is Big. try again");
    }
}