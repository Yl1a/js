const slider = document.querySelector('.slider');
const wrapperBtn = document.querySelectorAll('.wrapper i');/* 
const slideEL = document.querySelectorAll('.slide'); */
const firstCardLen = slider.querySelector('.slide').offsetWidth
/* 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next'); */
let currentIndex = 0;



function showSlide(){
    const offset = -10 * slider.scrollLeft;
    slider.style.transform = `translateX(${offset}%)`
}

/* function goNext(){
    currentIndex = (currentIndex + 1) % slideEL.length;
    showSlide(currentIndex);
}

function goPrev(){
    currentIndex = (currentIndex - 1 + slideEL.length) % slideEL.length;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

showSlide(currentIndex) */

wrapperBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        slider.scrollLeft += btn.id === 'left' ? - firstCardLen : firstCardLen;
    })
})

const infiniteScroll = () => {
    if(slider.scrollLeft === 0){
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
    }else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth){
        slider.scrollLeft = slider.offsetWidth;
    }
}

slider.addEventListener('scroll', infiniteScroll);
