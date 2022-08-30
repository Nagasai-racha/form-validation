const form = document.querySelector('.form');
const userInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#password');
const cpassInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    validate();
    if(isFormValid() == true){
        form.submit;
    }else{
        event.preventDefault();    
    }

    function isFormValid(){
        const inputContainers = form.querySelectorAll('.form-control');
        let result = true;
        inputContainers.forEach((container)=>{
            if(container.classList.contains('error')){
                result = false;
            }
        });
        return result;
    }

})

function validate(){

    if(userInput.value.trim() == ''){
        setError(userInput,'username cannot be empty');
    }
    else if(userInput.value.trim().length <5 || userInput.value.trim().length > 15){
        setError(userInput,'username should be >5 & <15');
    }
    else{
        setSuccess(userInput);
    }

    //email

    if(emailInput.value.trim()==''){
        setError(emailInput, 'email cannot be empty');
    }
    else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }
    else{
        setError(emailInput,'enter correct email')
    }

    //password


    if(passInput.value.trim() == ''){
        setError(passInput,'password cannot be empty');
    }
    else if(passInput.value.trim().length <6 || passInput.value.trim().length >15){
        setError(passInput,'password should be >6 & <15');
    }else{
        setSuccess(passInput);
    }
    
    
    //confirm-password
    
    if(cpassInput.value.trim() == ''){
        setError(cpassInput,'password cannot be empty');
    }
    else if(cpassInput.value !== passInput.value){
        setError(cpassInput,"password doesn't match");
    }
    else{
        setSuccess(cpassInput);
    }
    
}

function setError(_element , _errormsg){
    const parent = _element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const para = parent.querySelector('p');
    para.textContent = _errormsg;
}

function setSuccess(_element){
    const parent = _element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}