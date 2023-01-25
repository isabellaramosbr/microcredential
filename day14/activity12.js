console.log('Isabella Ramos')

/* below is jQuery program */

$('document').ready(function(){


$('.para2').css('border','5px ridge green')
/*for JS it would be: 
let p2 = document.querySelector('.para2')
p2.style.border='5px ridge green'
*/

$('.a').css({
  'color':'magenta', 'padding': '1em 2em','background-color':'lightgreen'
})

$('#pExamples').css('text-align','center');

//Example 2 ('odd' is based on the index which starts wih 0. '>'selects the child)
$('div > p:odd').css('color','blue');
$('#pExamples > p.para5').css('font-size', '1.3em');

//('+' selects the next adjacent element) - means: find a ul that comes after p
$('p+ul').css('border','1em dotted orange');

//Example 5 - targeting parent and previous/next elements

let p4 = $('.para4')
p4.prev().css('background-color','pink');
p4.next().css('background-color','orange');
p4.parent().css('font-family','Arial Black')

//Example 6 - append and appendTo

$('.p_append').append(' NEW MESSAGE (append)')
$('.p_prepend').prepend('NEW MESSAGE (prepend) ')


//Example 7 - append and appendTo
$('<h3>NEW HEADING</h3>').insertAfter('.p_append').css('background-color','lightblue')


//Example 10 

$('#btnProperties').click(function(){
  $('.square').css('background-color','pink')
})
$('#addClass').click(function(){
  $('.square').addClass('btnColor')
})
$('#removeClass').click(function(){
  $('.square').removeClass('btnColor')
})
$('#toggleClass').click(function(){
  $('.square').toggleClass('btnColor')
})

//Example 12
function hoverCicle(){
  $('.circle').addClass('btnColor')
  $('.circle').html('<p>Circle was hovered!</p>')
}

function resizeWindow(){
  $('.circle').addClass('btnColor')
  $('.circle').html('<p>Window was resized!</p>')
}

function dblClickCircle(){
  $('.circle').html('<p>Double click!</p>')
}

$('.circle').hover(hoverCicle)
$(window).resize(resizeWindow)
$('.circle').dblclick(dblClickCircle)
})

/* below is JS code */