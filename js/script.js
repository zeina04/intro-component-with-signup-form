const validateEmail= function(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
};

const handleSubmit = function (e){
    e.preventDefault();

 const firstname = document.getElementById('firstname');
 const lastname = document.getElementById('lastname');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const firstnameError = document.getElementById("firstname-error");
 const lastnameError = document.getElementById("lastname-error");
 const emailError = document.getElementById("email-error");
 const passwordError = document.getElementById("password-error");
 const errorIcon = document.querySelectorAll(".error");

 const errorIconFirstName = document.querySelector(".errorIcon-firstname");
 const errorIconLastName = document.querySelector(".errorIcon-lastname");
 const errorIconEmail = document.querySelector(".errorIcon-email");
 const errorIconPassword = document.querySelector(".errorIcon-password");

 let hasError = false;

if(firstname.value === ""){
    firstnameError.textContent = "First Name cannot be empty";
    errorIconFirstName.classList.remove("hidden");
    hasError = true;
} else {
    firstnameError.textContent = "";
    errorIconFirstName.classList.add("hidden");
}
if(lastname.value === ""){
    lastnameError.textContent = "Last Name cannot be empty";
    errorIconLastName.classList.remove("hidden");
    hasError = true;
} else {
    lastnameError.textContent = "";
    errorIconLastName.classList.add("hidden");
}
if(!validateEmail(email.value)){
    emailError.textContent = "Looks like this is not an email";
    errorIconEmail.classList.remove("hidden");
    hasError = true;
} else {
    emailError.textContent = "";
    errorIconEmail.classList.add("hidden");
    alert("Email is valid");
}
if(password.value === ""){
    passwordError.textContent = "Password cannot be empty";
    errorIconPassword.classList.remove("hidden");
    hasError = true;
} else {
    passwordError.textContent = "";
    errorIconPassword.classList.add("hidden");
}

// prevent form submitting if there are errors
if(hasError){
    return;
}
};
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
    