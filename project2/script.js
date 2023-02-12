console.log('Isabella Ramos')


const buttons = document.querySelectorAll('.onclick');
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      button.innerHTML ='In your bag!'
    });
  });
  

const checkout = document.querySelectorAll('.checkout');
checkout.forEach(function(newTab) {
    newTab.addEventListener("click", function() {
        window.location.href = "mybag.html"
    });
  });


let item1 = document.querySelector('#item1')
let item2 = document.querySelector('#item2')
let item3 = document.querySelector('#item3')
let item4 = document.querySelector('#item4')
let item5 = document.querySelector('#item5')
let item6 = document.querySelector('#item6')




function toggleDisplay1(){
    let x1 = document.getElementById("item1");
    x1.style.display ="none"
}

function toggleDisplay2(){
    let x2 = document.getElementById("item2");
    x2.style.display ="none";
}

function toggleDisplay3(){
    let x3 = document.getElementById("item3");
    x3.style.display ="none";
}

function toggleDisplay4(){
    let x4 = document.getElementById("item4");
    x4.style.display ="none";
}
function toggleDisplay5(){
    let x5 = document.getElementById("item5");
    x5.style.display ="none";
}
function toggleDisplay6(){
    let x6 = document.getElementById("item6");
    x6.style.display ="none"; 
}


