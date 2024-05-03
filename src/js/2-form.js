let formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("[name='email']");
const messageInput = form.querySelector("[name='message']");

const savedState = localStorage.getItem("feedback-form-state");

const storageKey = "feedback-form-state";

if (savedState) {
    formData = JSON.parse(savedState);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener("input", (event) => {
    const name = event.target.name;
    formData[name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
   
    if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
        return alert("Fill please all fields");
    }

    console.log("Form Data:", formData);
    localStorage.removeItem(storageKey);
    formData = { email: "", message: "" };
    form.reset();
});
