const pageOverlay = document.querySelector('.page-overlay');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const imgOverlay = document.querySelectorAll('.img-overlay');
const next = document.querySelector('.next'),
prev = document.querySelector('.prev');
let close = document.querySelector('.close');
// let clikedCurrent = document.querySelectorAll('.img-overlay');

// toggler
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

const navToggler = () => {
    navbar.classList.toggle('open');
}


// nextSlide Func
const nextSlide = ()=>{
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else{
        slideContainer.firstElementChild.classList.add('current');
    }
}

// prevSlide Func
const prevSlide = ()=>{
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
        console.log('going to push repo');
    } else {
        slideContainer.lastElementChild.classList.add('current');
    }
}

imgOverlay.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        pageOverlay.style.display = 'block';
        let current = document.querySelector('.current');
        current.classList.remove('current');
        slides[index].classList.add('current');
    })
})

// close layout
const closePage = ()=>{
    // pageOverlay.classList.add('closed');
    pageOverlay.style.display = 'none'
}
close.addEventListener('click', ()=> closePage())
// toggler
menu.addEventListener('click', navToggler);
// next event
next.addEventListener('click', ()=> nextSlide());
// prev event
prev.addEventListener('click', ()=> prevSlide());