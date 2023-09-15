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



/*end*/

