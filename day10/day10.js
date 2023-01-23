console.log('Isabella Ramos');


/*
console.log(`The current counter is 1`);
console.log(`The current counter is 2`);
console.log(`The current counter is 3`);
console.log(`The current counter is 4`);
console.log(`The current counter is 5`);
*/


//Example 1 - Simplifying the previous lines using  FOR LOOP

for(let counter=1; counter <=5; counter++){
  console.log(`The current counter is ${counter}`);
}


//Example 2 - Print number from initial to 50, exlcusive, only even numbers. The program will ask the user to enter the initial.

let num = parseInt(prompt('Enter a number between 0 and 50: '));

for(num; num<50; num++){
  if(num%2===0){
  console.log(`number = ${num}`);
  }
}


//Example 3 - Print number from 100 to 0, inclusive, decreasing order in a step of 10

for(let y=100; y >=0; y-=10){
console.log(`y =${y}`);
}



//Example 4 - For loop in an array

let cars =['Tesla', 'BMW', 'Mazda', 'Nissan', 'Jeep'];

for(let i=0; i<cars.length; i++   ){
  console.log(`car ${i} = ${cars[i]}`);
}


//Example 5 - For ... of loop to print each element in an array

for(let eachItem of cars){
  console.log(eachItem);
}


//Example 6 - For ---of loop to print each letter in string
let myString = "Isabella";
for (let eachLetter of myString){
  console.log(eachLetter);
}


//Example 7 - Nesting for loops

let outerCounter = 1;

for(outerCounter; outerCounter<=5; outerCounter++){
  console.log(`------ OUTER LOOP ${outerCounter} ------`);
  for(let innerCounter = 30; innerCounter>=0; innerCounter -=10){
  console.log(`Inner counter ${innerCounter}`);
}
}

//Example 8 - While loop

let z = 1;
while(z<=5){
  console.log(`The current number is ${z}`);
  z++;
}

/*
//Example 9 - Guess secret number - if/else
const SECRET = 4;
let guessNum = parseInt(prompt('Guess the secret number between 0 - 10'));

if(guessNum === SECRET){
  console.log(`GREAT JOB! Number ${guessNum} is the secret number`);
}

// you can use if/else but the prompt below will only show once //
else{
  guessNum = parseInt(prompt('WRONG! Take a guess again...'));
}
*/


//Example 10 - Guess secret number - while loop (prompt repeats until correct answer)

const SECRET = 4;
let guessNum = parseInt(prompt('Guess the secret number between 0 - 10'));
while(guessNum !== SECRET){
  guessNum = parseInt(prompt('WRONG! Take a guess again...'));
}
console.log(`GREAT JOB! Number ${guessNum} is the secret number`);

//Example 11 - Working with break in a loop 

console.log('------ Example 11------');
for(let t = 20; t>0; t--){
console.log(`t = ${t}`);
if(t===9){
  break;
}
}


//Example 12 - Working with continue in a loop. Loop will skip one iteration when t = 9
console.log('------ Example 12------');
for(let t = 20; t>0; t--){
console.log(`t = ${t}`);
if(t===9){
  continue;
}
}

//Example 13 - Guess secret number - while loop (prompt repeats until correct answer) ->  array

const NUMBERS = [8, 12];
let guessNumbers = parseInt(prompt('Guess the secret number between 0 - 10'));
for (let r of NUMBERS){
console.log(NUMBERS);
}
/*
(guessNum !== NUMBERS){
  guessNum = parseInt(prompt('WRONG! Take a guess again...'));
}
console.log(`GREAT JOB! Number ${guessNum} is the secret number`); */
