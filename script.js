on_operation = false;
just_selected_an_operator = false;
dot = false;
current_operator = 'none';
first_term = undefined;
second_term = undefined;


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
    let a = parseFloat(n1);
    let b = parseFloat(n2);
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
        DISPLAY_VALUE = n.toString();
        disp.textContent = n;    
    } else {
        clearDisplay();
    }
}

function addContent(n){
    if (DISPLAY_VALUE.length < 16) {
        DISPLAY_VALUE += n;
        disp.textContent = DISPLAY_VALUE;
    } else {
        DISPLAY_VALUE = DISPLAY_VALUE.slice(1);
    }
    
}

function pushNumber(){
    let n = this.id;
    n = n[n.length-1];
    if (on_operation) {
        if (!just_selected_an_operator) {
            addContent(n);  
        } else {
            showContent(n);
            dot = false;
        }

    } else {
        showContent(n);
        current_operator = 'none';
        first_term = n;
        on_operation = true;
    }
    just_selected_an_operator=false;
}

function eraseLastAction(){
    if (current_operator === 'none') {
        if (DISPLAY_VALUE.length > 0) {
            if (DISPLAY_VALUE[DISPLAY_VALUE.length-1] === '.') {
                dot = false;
            }
            let newValue = DISPLAY_VALUE.slice(0, DISPLAY_VALUE.length-1);
            showContent(newValue);
        }
    } else {
        current_operator = 'none';
        just_selected_an_operator = false;
    }
}

function selectOperation() {
    if (current_operator === 'none') {
        current_operator = this.id.split('-')[1];
        first_term = parseFloat(DISPLAY_VALUE);
    } else {
        makeOperation();
        current_operator = this.id.split('-')[1];
    }
    just_selected_an_operator = true;
}

function makeOperation(){
    if (!just_selected_an_operator && current_operator !== 'none') {
        let second_term = parseFloat(DISPLAY_VALUE);
        let result = operate(first_term, current_operator ,second_term);
        console.log(typeof(result));
        if (result !== Number.POSITIVE_INFINITY) {
            showContent(result);
            first_term = result;
        } else {
            first_term = undefined;
            showContent('Can\'t divide by 0')
        }
    }
    if (this.id === 'btn-eq') {
        on_operation = false; 
    }
    dot = false;
    second_term = undefined;

}

function pushDot(){
    if (!dot) {
        addContent('.');
        dot=true;
    }
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

btn_clear.addEventListener('click', () =>{
    clearDisplay();
    current_operator = 'none';
    on_operation = false;
    first_term = undefined;
    second_term = undefined;
    dot=false;
});

btn_bs.addEventListener('click', eraseLastAction);

n_btns.forEach(btn => {btn.addEventListener('click',pushNumber)});

op_btns.forEach(btn => {btn.addEventListener('click',selectOperation)});

btn_dot.addEventListener('click', pushDot)


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

