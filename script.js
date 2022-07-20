function removeTransition(e){
    if (e.propertyName !== 'transform') {
        return;
    } else {
        this.classList.remove('btn-clicked');
    }
    console.log(e);
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        btn.classList.add('btn-clicked');
        btn.addEventListener('transitionend', removeTransition);
    })
    
});


