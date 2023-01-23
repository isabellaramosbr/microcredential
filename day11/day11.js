console.log('Isabella Ramos');

//Example 1 
function msg(){
  console.log('Hello, world!');
}
//Example 2
function printCount(){
  for(let i=3; i>0; i -=1){
    console.log(`Counting =${i}`)
  }
}

//Example 3
function greeting(name){
  console.log(`Welcome to the program ${name}`)
}

//Example 4
function upperMessage(message){
  let upper= message.toUpperCase();
  console.log(upper);
}

let user = prompt('Enter a message');
upperMessage(user);

//Example 5

function greet(firstName, lastName){
  console.log(`Welcome ${firstName} ${lastName[0].toUpperCase()}`);
}

//Example 6
function printMsg (message, numCount){
  for(let counter =1; counter <=numCount; counter++){
    console.log(`Counter =${counter} = ${message}`)
  }
}

//Example 7
function isSnakeEyes(dice1, dice2){
  if(dice1===1 && dice2===1){
    console.log("Snake Eyes!")
  }
  else{
    console.log("Ooops!! not snake eyes :( ")
  }
}

//Example 8 - option 1
function sumXY(){
  let x=7, y=3;
  let add = x+y
  return add;
  console.log('This line is after the retun');
}


/*
//Example 8 - option 2
function sumXY(){
  let x=7, y=3;
  return x + y
    console.log('This line is after the retun');
}

*/

//Example 9 - funtion with parameter amd return value
function doubleNumber(number){
  let dNumber = number*2;

  return dNumber;
//whatever is after 'return' won't show. Return === break
  dNumber = number*5;

}

//Example 10 - Function with parameter and return value
function sumNum(num1, num2){
  let sum = num1 + num2;
  return sum
}

let a = -5, b = 8, c = 2

let number1 = sumNum(b,c);
let number2 = sumNum(a,c);

//Example 11 
function weather(temperature){
  if(temperature>=75){
    return true
  }
  else{
    return false
  }
}

let userWeather = parseInt(prompt('Please enter a temperature'));
let userT = weather(userWeather)

//Example 12 -> array as an argument in a function
function lastElement(arrayInput){
  if(arrayInput===undefined){
    return "You didn't enter an array. "
  }
  else if(arrayInput.lenght !==0){
    let lastIndex = arrayInput.lenght -1
    return arrayInput[lastIndex]
  }
  else{
    return "Array is empty"
  }
}

let array1 = ['lion', 23, false, 'orange', 89]
let arrayAnswer = lastElement(array1)

//Example 13 - JS build-in functions

let num = Math.PI

//Example 14 - Random number between 10 and 20
function pickNum(){
  let pick = 10 + Math.floor(Math.random()*10)
  return pick
}