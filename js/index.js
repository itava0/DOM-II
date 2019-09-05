//Task: Create Unique Event Listeners

//Load Event
window.addEventListener('load', (event) => {
  alert("Welcome!!!");
});

//Mouseenter Event
let nav = document.querySelectorAll('nav a');
nav.forEach(item => {
  item.addEventListener('mouseenter', e => {
    item.style.color = "lightgreen"
    item.style.transition = "all 0.2s ease-in"
    e.preventDefault();
    e.stopPropagation()
  }),
  //Mouseleave Event
  item.addEventListener('mouseleave', e => {
    item.style.color = "black"
    item.style.transition = "all 0.2s ease-in"
    e.preventDefault();
    e.stopPropagation()
  })
});

//Click Event
let button = document.querySelectorAll('.btn');
button.forEach(item => {
  item.addEventListener('click', e => {
    item.style.transform = 'scale(1.3)';
    item.style.transition = ' transform 0.5s';
  })
});

//Focus Event 
nav.forEach(item => {
  item.addEventListener('focus', e => {
    e.target.style.background = 'pink';
    e.target.style.transition = "all 0.2s ease-in"
  })
  //Blur Event
  item.addEventListener('blur', e=> {
    item.style.transform = 'scale(1.3)';
    item.style.transition = "all 0.2s ease-in"
  })
});

//Resize Event 
window.addEventListener("resize", (e)=> {
  document.querySelector('.logo-heading').textContent = "The Fantastic Bus";
});

//Dclick Event
const image = document.querySelectorAll('.img-content img');
image.forEach(item => {
  item.addEventListener('dblclick',  (e)=> {
    item.style.transform = 'skewY(10deg)';
    item.style.transition = ' transform 0.5s';
  })
});

//Contextmenu Event 
const header = document.querySelectorAll('h2');
header.forEach(item => {
  item.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
});

// Copy Event 
const para = document.querySelectorAll('p');
para.forEach(item => {
  item.addEventListener('copy', (e)=>{
    e.preventDefault();
  })
});