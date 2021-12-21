import Throttle from 'lodash.throttle';
const formData = {};
const formEmail = document.querySelector(".feedback-form input");
const formText = document.querySelector(".feedback-form textarea");
const form = document.querySelector(".feedback-form");

console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

// Если данные уже вводились ранее
if (localStorage.getItem("feedback-form-state") !== null) {
    const { email = "", message = "" } = JSON.parse(localStorage.getItem("feedback-form-state"));

    console.log("Проверили, ФОРМА ИМЕЕТСЯ");
    formText.value = message;
    formEmail.value = email;
}
// Если использовать событие 'change' тогда не нужен throttle 
// form.addEventListener('change', onFormChange);
form.addEventListener('input', Throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

// function onFormChange(evt) {
//     formData[evt.target.name] = evt.target.value;
//     console.log(formData);
    
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem("feedback-form-state");
    form.removeEventListener('submit', onSubmit);
    form.removeEventListener('input', Throttle(onInput, 500));

    formText.value = "";
    formEmail.value = "";

    console.log("Данные внесены:");
    console.log(`email: ${formData.email}`);
    console.log(`message: ${formData.message}`);
}
