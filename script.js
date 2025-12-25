let desktopScreen=document.querySelector('.desktop')
let desktopMenu=document.querySelector('.desktop-menu')

let desktopIconMenu=document.querySelector('.desktop-icon-menu')
let desktopIconBox=document.querySelectorAll('.icon-box')
let desktopIconBoxImg=document.querySelectorAll('.icon-box img')

let startButton=document.querySelector('#start-button')
let startButtonimg=document.querySelector('#start-button img')
let startButtonMenu=document.querySelector('.start-button-menu')
console.log(startButton)
console.log(startButtonMenu)

startButton.addEventListener('click',function(element){
   element.preventDefault()
    element.stopPropagation(); 
   console.log('hello')
     startButtonMenu.style.bottom='68px'
     startButtonMenu.style.left='230px'
     startButtonMenu.classList.toggle('active');
    //  startButtonMenu.style.display='none'
     desktopMenu.style.display='none'
    // desktopIconMenu.style.display='none'
      
    
         
         

})



function handleOutsideClick(event) {
    const isOpen = startButtonMenu.classList.contains('active');
    const clickedInsideMenu = startButtonMenu.contains(event.target);
    const clickedButton = startButton.contains(event.target);

    if (isOpen && !clickedButton && !clickedInsideMenu) {
        startButtonMenu.classList.remove('active');
    }
}

window.addEventListener('click', function(event) {
    handleOutsideClick(event);
});


window.addEventListener('contextmenu', function(event) {
    handleOutsideClick(event);
});








desktopIconBox.forEach(function(event){
event.addEventListener('contextmenu',function(element){
     element.preventDefault()
     element.stopPropagation()
    console.log(element)
     desktopIconMenu.style.top=element.clientY+'px'
     desktopIconMenu.style.left=element.clientX+'px'
      desktopIconMenu.style.display='flex'
      desktopMenu.style.display='none'
        startButtonMenu.classList.toggle('active')
      desktopIconMenu.style.zIndex ="20" 
      
    const desktopIconMenuWidth = desktopIconMenu.offsetWidth;
const desktopIconMenuHeight = desktopIconMenu.offsetHeight;
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
console.log(desktopIconMenuWidth)
console.log(desktopIconMenuHeight)

    // adjust horizontal position
if(element.clientX + desktopIconMenuWidth > viewportWidth){
    desktopIconMenu.style.left = (viewportWidth - desktopIconMenuWidth) + "px";
}

// adjust vertical position
if(element.clientY + desktopIconMenuHeight > viewportHeight){
    desktopIconMenu.style.top = (viewportHeight - desktopIconMenuHeight) + "px";
}




    
})
})


desktopScreen.addEventListener('contextmenu',function(event){
    event.preventDefault()
    desktopMenu.style.top=event.clientY+'px'
    desktopMenu.style.left=event.clientX+'px'
    desktopMenu.style.display='flex'
    desktopIconMenu.style.display='none'
    desktopIconMenu.style.zIndex ="1"
    //    startButtonMenu.style.vi='none'

    const desktopMenuWidth = desktopMenu.offsetWidth;
const desktopMenuHeight = desktopMenu.offsetHeight;
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

    // adjust horizontal position
if(event.clientX + desktopMenuWidth > viewportWidth){
    desktopMenu.style.left = (viewportWidth - desktopMenuWidth) + "px";
}

// adjust vertical position
if(event.clientY + desktopMenuHeight > viewportHeight){
    desktopMenu.style.top = (viewportHeight - desktopMenuHeight) + "px";
}

})



desktopScreen.addEventListener('click',function(){
    desktopMenu.style.display='none'
      desktopIconMenu.style.display='none'  
           


})



