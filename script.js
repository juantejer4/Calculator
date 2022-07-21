on_operation = false;
just_selected_an_operator = false;
current_operator = 'none';
first_term = 0;
second_term = 0;

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
    let a = parseInt(n1);
    let b = parseInt(n2);
    switch (operator) {
        case 'plus':
            return add(a,b);
        case 'minus':
            return substract(a,b);
        case 'mtply':
            return multiply(a,b);
        case 'div':
            return divide(a,b);
    }
}

//---------FUNCTIONS TO MANIPULATE DISPLAY----------
const disp = document.querySelector('.display-content');

function clearDisplay(){
    disp.textContent = '0';
    DISPLAY_VALUE = '';
    just_selected_an_operator=false;
}

function showContent(n){
    clearDisplay();
    if (n !== '') {
        DISPLAY_VALUE = n;
        disp.textContent = n;    
    } else {
        clearDisplay();
    }
}

function addContent(n){
    DISPLAY_VALUE += n;
    disp.textContent = DISPLAY_VALUE;
}

function pushNumber(){
    let n = this.id;
    n = n[n.length-1];
    if (on_operation) {
        if (!just_selected_an_operator) {
            addContent(n);  
        } else {
            showContent(n);
        }

    } else {
        showContent(n);
        on_operation = true;
    }
    just_selected_an_operator=false;
}

function eraseLastAction(){
    if (current_operator === 'none') {
        if (DISPLAY_VALUE.length > 0) {
            let newValue = DISPLAY_VALUE.slice(0, DISPLAY_VALUE.length-1);
            showContent(newValue);
        }
    } else {
        current_operator = 'none';
        just_selected_an_operator = false;
    }
}

function selectOperation() {
    if (DISPLAY_VALUE.length>0) {
        
    }
    current_operator = this.id.split('-')[1];
    first_term = parseInt(DISPLAY_VALUE);
    just_selected_an_operator = true;
}

function makeOperation(){
    let second_term = DISPLAY_VALUE;
    let result = operate(first_term, current_operator ,second_term);
    showContent(result);
    on_operation = false;
    first_term = result;
    second_term = 0;

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
const n_btns = [btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9]

const btn_dot = document.querySelector('#btn-dot');
const btn_div = document.querySelector('#btn-div');
const btn_mtp = document.querySelector('#btn-mtply');
const btn_add = document.querySelector('#btn-plus');
const btn_min =document.querySelector('#btn-minus');
const op_btns = [btn_div ,btn_mtp ,btn_add ,btn_min]

const btn_eq = document.querySelector('#btn-eq');


//Adding Event Listeners
btn_eq.addEventListener('click', makeOperation);

btn_clear.addEventListener('click', clearDisplay);

btn_bs.addEventListener('click', eraseLastAction);

n_btns.forEach(btn => {btn.addEventListener('click',pushNumber)});

op_btns.forEach(btn => {btn.addEventListener('click',selectOperation)});

/*btn_dot.addEventListener('click', pushNumber)*/


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

