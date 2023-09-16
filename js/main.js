/*sm8*/ 

    document.querySelectorAll('.btn').forEach((el) => {
        el.addEventListener('mousedown', () =>{

            let content = el.nextElementSibling;
            console.log(content);

        if(content.style.maxHeight){
            document.querySelectorAll('.answer').forEach(el => el.style.maxHeight = null)
        }else{
            document.querySelectorAll('.answer').forEach(el => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
    
})

let duck = document.querySelector('.duck');

document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'w'){
        console.log('up');
        duck.style.top = duck.offsetTop-50+'px'
    }else if(event.key.toLowerCase() == 's'){
        console.log('down');
        duck.style.top = duck.offsetTop+50+'px'
    }else if(event.key.toLowerCase() == 'a'){
        console.log('left');
        duck.style.left = duck.offsetLeft-50+'px';
    }else if(event.key.toLowerCase() == 'd'){
        console.log('right');
        duck.style.left = duck.offsetLeft+50+'px';
    }

})

document.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() == 'r'){
        console.log('yep');
        document.body.style.background = "#AE6060";
    }else if(event.key.toLowerCase() == 'b'){
        document.body.style.background = "#6B8D9B";
    }else if(event.key.toLowerCase() == 'g'){
        document.body.style.background = "#95AE60";
    }
})

console.log('hello');


/*end*/

