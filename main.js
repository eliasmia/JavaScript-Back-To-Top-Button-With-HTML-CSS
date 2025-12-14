const backTop = document.querySelector(".back-to-top");

window.addEventListener('scroll',() => {
    if(window.pageYOffset > 100){
        backTop.classList.add('active')
    }
    else{
       backTop.classList.remove('active')  
    }

})

// console.log(backTop);