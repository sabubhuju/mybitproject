let form = document.contact_form;
let fullname = document.contact_form.fname;
let email = document.contact_form.email;
let num = document.contact_form.num;

console.log(fullname, email, num);

form.addEventListener("submit", function(event) {
    if(fullname.value.length == 0) {
        fullname.nextElementSibling.innerText = "Fullname is empty!";
        event.preventDefault();
    } else {
        fullname.nextElementSibling.innerText = "";
    }

    if(email.value.length == 0) {
        email.nextElementSibling.innerText = "Email cannot be empty!";
        event.preventDefault();
    } else {
        email.nextElementSibling.innerText = "";
    }

    if(email.value.length == 0) {
       num.nextElementSibling.innerText = "Contact number is compulsory!!";
        event.preventDefault();
    } else {
        num.nextElementSibling.innerText = "";
    }
});

email.addEventListener("keyup", function() {
    if(this.value.indexOf("@") == -1) {
        email.nextElementSibling.innerText = "'@' symbol is required!";
    } else if(this.value.indexOf(".") == -1) {
        email.nextElementSibling.innerText = "'.' symbol is required!";
    } else if(this.value.indexOf("@") != this.value.lastIndexOf("@")) {
        email.nextElementSibling.innerText = "'@' symbol must be one!";
    } else {
        email.nextElementSibling.innerText = "";
    }
});
