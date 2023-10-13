<<<<<<< HEAD
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
=======
let modalShowButton = document.querySelector('.add-button');
let modalHideButton = document.querySelector('.close-button');
let modal = document.querySelector('.modal');


let btnModal = document.querySelector('.send');

let wraps = document.querySelector('.input_wraps');
let inputModal = document.querySelector('.inputModal');
let descModal = document.querySelector('.descModal');

let errTitle = document.querySelector('.addTitle');
let errDesc = document.querySelector('.addDesc');

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


log = false;


wraps.addEventListener('keyup', function(event){
    if(inputModal.value.length < 8){
        errTitle.innerHTML = '<p class = "error">*слишком короткое название</p>'
        inputModal.style.border = "1px solid #da2929";
        log = false;
    }else{
        errTitle.innerHTML = '<p class = "error"></p>'
        inputModal.style.border = "1px solid #335b36";
        log = true;
    }
    if(descModal.value.length > 300){
        errDesc.innerHTML = '<p class = "error">*слишком большое описание</p>'
        descModal.style.border = "1px solid #da2929";
        log = false;
    }else{
        errDesc.innerHTML = '<p class = "error"></p>'
        descModal.style.border = "1px solid #335b36";
    }
})


btnModal.onclick = function(event){
    if(inputModal.value.length === 0){
        errTitle.innerHTML = '<p class = "error">*введите название</p>';
        inputModal.style.border = "1px solid #da2929";
        log = false;
    }

    if(descModal.value.length === 0){
        errDesc.innerHTML = '<p class = "error">*введите описание</p>'
        descModal.style.border = "1px solid #da2929";
        log = false;
    }
    
    if(log === true){
        Push(inputModal.value,descModal.value);
        showArr (inputModal.value,descModal.value);

        inputModal.value = "";
        descModal.value = "";

        modal.classList.remove('modal_active');

    }
    event.preventDefault();    
}

console.log('hello')

document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'b'){
        document.body.style.background = '#2f2f2f';
        document.body.style.color = "#fff";
        modal.style.color = "#000";
    }else if(event.key.toLowerCase() == 'w'){
        document.body.style.background = '#fff';
    }
})

let arr = [
    {
        title: '123',
        description: 'qeqweqweqweqweqwe',
    },

]
let wrap = document.querySelector('.news-wrapper')
function showArr (x,y){
        wrap.insertAdjacentHTML('beforeend',
        `<div class="news-item">
        <h3 class="h3">${x}</h3>
        <p class="news-item__p">
            ${y}
        </p>
    </div>`);
}

arr.forEach(element => {
    wrap.insertAdjacentHTML('beforeend',
    `<div class="news-item">
    <h3 class="h3">${element.title}</h3>
    <p class="news-item__p">
        ${element.description}
    </p>
</div>`)
});

function Push(x, y){
    arr.push(
        {
        title: 'x',
        description: 'y',
    }
    )
}




>>>>>>> be53fa35e83312ca2447d73b1ac807542d314caa
