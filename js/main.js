/*sm8*/ 

let inputName = document.querySelector('.inputName');
let inputYear = document.querySelector('.inputYear');
let btn = document.querySelector('.btn');
let errName = document.querySelector('.errorName');
let errYear = document.querySelector('.errorYear');
let errorReg = document.querySelector('.errorReg');

let regForm = document.querySelector('.reg');

let log = true;

reg = /[A-Za-zA-яА-яЁё]/g;

inputYear.oninput = function(){
    this.value = this.value.replace(reg, '')
}

regForm.addEventListener('keyup', function(){
    if(inputName.value.length < 2 ){
        inputName.style.border = "2px solid #dc7137";
        errName.innerHTML = `<p class="error">*Введите не менее 2 символов</p>`;
        log = false;
    }else{
        inputName.style.border = "2px solid #AE9961";
        errName.innerHTML = ``;
    }

    if(inputYear.value.length < 4 || inputYear.value.length > 4 ){
        inputYear.style.border = "2px solid #dc7137";
        errYear.innerHTML = `<p class="error">*Введите год, 4 цифры</p>`;
        log = false;
    }else{
        inputYear.style.border = "2px solid #AE9961";
        errYear.innerHTML = ``;
    }
    
})




btn.onclick = function(event){
    if (inputName.value.length === 0){
        errName.innerHTML =`<p class="error">*Введите имя</p>`;
        log = false;
    }
    if (inputYear.value.length === 0){
        errYear.insertAdjacentHTML('beforeend', 
        `<p class="error">*Введите год рождения</p>`)
        log = false;

    }
/*     if(log == true){
        inputName.value = '';
        inputYear.value = '';
    }else{
        errorReg.innerHTML = 'регистрация не прошла';
    } */
    event.preventDefault();
    

}


/*end*/

