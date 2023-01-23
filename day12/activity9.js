console.log("Isabella Ramos")



//Example 1 
console.log('------- example 1 -------')
let msg = 'This is an outside message'

function displayMsg(){
  let msg = 'Hello, world';
  return(msg)
}

//Example 2 
console.log('------- example 2 -------')
var fullMoon = true
let species = 'human'

if (fullMoon){
  let species ='wolf';
  console.log(`FULL MOON! Lupin is a ${species}`)
}
  console.log(`NOT full mooon. Lupis is ${species}`);

  //Example 3
  console.log('------- example 3 -------')
  let message ='Hello world'
  console.log(message);
  message = 'Good evening!';
  console.log(message);


  //Example 4  - skip

  //Example 5
  console.log('------- example 5 -------')
  for(var i = 0; i<10; i++){
    console.log(i)
  }
console.log(`The last value of i is ${i}`)

//Example 6
console.log('------- example 6 -------')
let sum = function(num1,num2){
  return num1+num2;
}

let square = function(num){
  return Math.pow(num, 2)
}

//Example 7 - function calling another function
console.log('------- example 7 -------')
function callTwice(dice){
  dice();
  dice();
}
function rolldice(){
  const roll = Math.trunc(Math.random()*7)
  console.log(roll)
}

//Example 8 - function that returns another function

console.log('------- example 8 -------')
function makeBetweenFunc(min, max){
  return function(num){
    if(num>min && num<=max){
      return true;
    }

    else if(num<min || num>max){
      return false;
    }

   else{
      return 'CANNOT COMPARE';
   }
  }
}

//Example 9 (skip)


//Example 10
console.log('------- example 10 -------')

const myMath = {
  area(side){return side*side},
  perimeter(side){return side*4}
}


//Example 11 - how to access properties in a method using "this"
console.log('------- example 11 -------')
const cat ={
  name: 'Mickey',
  color:'white with brown spots',
  breed: 'unknown',
  meow(){console.log(this.name)}
}


//Example 12 
console.log('------- example 12 -------')
const hen = {
  name: 'Helen',
  eggCount: 0 ,
  layAnEgg(){this.eggCount++; return 'EGG'}
}

//Example 13
console.log('------- example 13 -------')
function yell(msg){
  try{console.log(msg.toUpperCase().repeat(3))}
  catch{
    console.log('Please pass a string next time')
  }
}

function yellagain(msg){
  try{console.log(msg.toUpperCase().repeat(3))}
  catch(e){
    console.log(e)
    console.log('Please pass a string next time!')
  }
}