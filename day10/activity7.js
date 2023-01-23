console.log("Isabella Ramos");

console.log("a) while loop nesting with if - else if - else statement");


let answer;


while (answer < 1 || answer > 10 || isNaN(answer)){
    answer = parseInt(prompt("Enter a number between 1 and 10."));
    if(answer < 1) {
        prompt(`${answer} is less than 1. Enter a number greater than 1.`);
      
    } else if(answer > 10) {
        prompt(`${answer} is greater than 10. Enter a number less than 10.`);
       
    } else if (isNaN(answer) === true) {
        answer = parseInt(prompt("This is a string. Please enter a number between 1 and 10:"));
 
    
}}

console.log(`You entered ${answer}.`);

console.log("b) for loop");


while(answer <=20){
    console.log(`Number is ${answer} now.`);
    answer++;

}

//how do I get the prompt to continue the flow with the other conditions instead of returning to "enter a number?"//