console.log("Isabella Ramos")


console.log('1)checkName() function: without parameter/s or return value')

function checkName() {
  let answer = prompt("Please enter a name:");

  while (answer === null || answer === "" || !isNaN(parseInt(answer))) {
    if (answer === null || answer === "") {
      answer = prompt("You forgot to enter a name. Enter a name again:");
    } else {
      answer = prompt(`"${answer}" is invalid! Enter a name again:`);
    }
  }

  console.log(`Welcome ${answer.toUpperCase()} to the class!`);
}


console.log('2) checkNum() function: without parameter/s but return value')

function checkNum() {
  let answer2 = prompt("Please enter a number:");
  const result = answer2 % 2 

  while (answer2 === null || answer2 === "" || isNaN(answer2)) {
    if (answer2 === null || answer2 === "") {
      answer2 = prompt("You forgot to enter a number. Please enter a number.");
    } else {
      answer2 = prompt(`"${answer2}" is not a number! Please enter number.`);
    }
  }
    if(answer2 %2 === 0){
      console.log(`${answer2} is true`);
    }
    else{
      console.log(`${answer2} is false`);
    }
}


console.log('3) lottery() function: with parameter but no return value')

let max = 99;
let min = 0;

function lottery() {
  let array = [] 
  for (let i=0; i < 5; i++) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(random);
  }
  return array;
}

console.log(lottery());
