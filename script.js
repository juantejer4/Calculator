DISPLAY_VALUE = ''

//------------BASIC FUNCTIONS--------------
add = (a,b) => {
    return a+b;
}

substract = (a,b)=>{
    return a-b;
}

multiply = (a,b)=>{
    return a*b;
}
divide = (a,b)=>{
    return a/b;
}
//-----------------------------------------

function operate(n1, operator, n2){

    switch (operator) {
        case 'adition':
            return add(n1,n2);
        case 'substraction':
            return substract(n1,n2);
        case 'multiply':
            return multiply(n1,n2);
        case 'division':
            return divide(n1,n2);
    }
}

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


