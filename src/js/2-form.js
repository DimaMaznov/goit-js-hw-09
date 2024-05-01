const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");

form.addEventListener  ("input", Formfocus)

function  Formfocus () {
    localStorage.setItem(localStorageKey, evt.target.value);}