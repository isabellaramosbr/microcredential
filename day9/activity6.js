//JavaScript Fundamentals: conditional statement

//Exercise 1: if, else if, else statement

let userInput = prompt("Please enter a number or string: ");
let checkInput = isNaN(parseInt(userInput));


console.log(`a) if-else if- else statement`)

if(userInput < 0){ 
  console.log(`${userInput} is a negative number.`);
}


else if(userInput >= 0){
console.log(`${userInput} is a positive number.`);
}

else{
console.log(`${userInput} is a string.`);
}

//Exercise 2: switch statement
console.log(`b) switch statement`);

let a = 'Red';
let b = 'Blue';
let c = 'Green';
let selectColor = prompt("Please pick a color(type a, b or c): \n a) Red \n b) Blue \n c) Green"); 

switch(selectColor){
  case"a": case"A":
  console.log(`You selected ${a} color.`);
  break;
  case"b": case"B":
  console.log(`You selected ${b} color.`);
  break;
  case"c": case"C":
  console.log(`You selected ${c} color.`);
  break;
  default:
  console.log(`Color is not in the list!`);
}


