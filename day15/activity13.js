console.log('Isabella Ramos')


//modal item 1
let item1 = document.querySelector('.link1')
let item2 = document.querySelector('.link2')
let item3 = document.querySelector('.link3')
let item4 = document.querySelector('.link4')


let modal = document.querySelector('.modalWindow')
let xclose = document.querySelector('.modalHeadX')


item1.addEventListener('click', function(){
modal.style.display ='block'
})
item2.addEventListener('click', function(){
    modal.style.display ='block'
})
item3.addEventListener('click', function(){
    modal.style.display ='block'
})
item4.addEventListener('click', function(){
    modal.style.display ='block'
})



xclose.addEventListener('click', function(){
    modal.style.display = 'none'
})


