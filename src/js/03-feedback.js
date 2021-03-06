import Throttle from 'lodash.throttle';
const formData = {
    email: "",
    messasge: ""
};
const formEmail = document.querySelector(".feedback-form input");
const formText = document.querySelector(".feedback-form textarea");
const form = document.querySelector(".feedback-form");

// Если данные уже вводились ранее
if (localStorage.getItem("feedback-form-state")) {
    const { email = "", message = "" } = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = email;
    formData.message = message;
    formText.value = message;
    formEmail.value = email;
}
// Если использовать событие 'change' тогда не нужен throttle 
// form.addEventListener('change', onFormChange);
form.addEventListener('input', Throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

// function onFormChange(evt) {
//     formData[evt.target.name] = evt.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem("feedback-form-state");

    console.log(formData);
    formData.email = "";
    formData.message = "";
    evt.currentTarget.reset(); // Очищает текущее поле
}
