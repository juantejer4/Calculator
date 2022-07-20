on_operation = false;
operator_pressed = false;
last_operator = '';

DISPLAY_VALUE = '';


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

//---------FUNCTIONS TO MANIPULATE DISPLAY----------
const disp = document.querySelector('.display-content');

function clearDisplay(){
    disp.textContent = '0';
    DISPLAY_VALUE = '';
}

function showContent(n){
    clearDisplay();
    DISPLAY_VALUE = n;
    disp.textContent = n;
}

function addContent(n){
    DISPLAY_VALUE += n;
    disp.textContent = DISPLAY_VALUE;
}

function pushNumber(){
    let n = this.id;
    n = n[n.length-1];
    if (on_operation) {
        addContent(n);
    } else {
        showContent(n);
        on_operation = true;
    }
}

function eraseLastAction(){

}

//---------BUTTONS FUNCTIONALITIES------------
const btn_clear = document.querySelector('#btn-clear');
const btn_bs = document.querySelector('#btn-bs');
const btn_0 = document.querySelector('#btn-0');
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const btn_4 = document.querySelector('#btn-4');
const btn_5 = document.querySelector('#btn-5');
const btn_6 = document.querySelector('#btn-6');
const btn_7 = document.querySelector('#btn-7');
const btn_8 = document.querySelector('#btn-8');
const btn_9 = document.querySelector('#btn-9');
const btn_dot = document.querySelector('#btn-dot');
const btn_div = document.querySelector('#btn-div');
const btn_mty = document.querySelector('#btn-mtply');
const btn_add = document.querySelector('#btn-plus');
const btn_min =document.querySelector('#btn-minus');

btn_clear.addEventListener('click', clearDisplay);
btn_bs.addEventListener('click', eraseLastAction)
btn_0.addEventListener('click', pushNumber)
btn_1.addEventListener('click', pushNumber)
btn_2.addEventListener('click', pushNumber)
btn_3.addEventListener('click', pushNumber)
btn_4.addEventListener('click', pushNumber)
btn_5.addEventListener('click', pushNumber)
btn_6.addEventListener('click', pushNumber)
btn_7.addEventListener('click', pushNumber)
btn_8.addEventListener('click', pushNumber)
btn_9.addEventListener('click', pushNumber)
/*btn_dot.addEventListener('click', pushNumber)
btn_div.addEventListener('click', pushNumber)
btn_mty.addEventListener('click', pushNumber)
btn_add.addEventListener('click', pushNumber)
btn_mimin.addEventListener('click', pushNumber)*/


function removeTransition(e){
    if (e.propertyName !== 'transform') {
        return;
    } else {
        this.classList.remove('btn-clicked');
    }
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        btn.classList.add('btn-clicked');
        btn.addEventListener('transitionend', removeTransition);
    })
    
});

showContent(0);

