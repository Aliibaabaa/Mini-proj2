const formsu = document.getElementById('forms');
const fullName = document.getElementById('full-name');
const gradeLevel = document.getElementById('grade-level');
const section = document.getElementById('section');


formsu.addEventListener('submit',function(e){
    e.preventDefault();

    const fullNameValue = fullName.value;
    const gradeLevelValue = gradeLevel.value;
    const sectionValue = section.value

    // localStorage.setItem('myObject',JSON.stringify([firstNameValue, lastNameValue]))

    localStorage.setItem('full-name', fullNameValue);
    localStorage.setItem('grade-level', gradeLevelValue);
    localStorage.setItem('section', sectionValue);

    window.location.href = "miniproj_mainInteractive.html";
})

        const forms = document.querySelector(".forms"),
        pwShowHide = document.querySelectorAll(".eye-icon"),
        links = document.querySelectorAll(".link");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            
            pwFields.forEach(password => {
                if(password.type === "password"){
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            })
            
        })
    })  
    // Hide and show password for signup
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
eyeIcon.addEventListener("click", () => {
const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
if (pInput.type === "password") {
eyeIcon.classList.replace("bx-hide", "bx-show");
return (pInput.type = "text");
}
eyeIcon.classList.replace("bx-show", "bx-hide");
pInput.type = "password";
});
});



    links.forEach(link => {
        link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
        })
    })

    
// Get the modal

var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("thisBtn");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("closes");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}



for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }
  }


const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passField = form.querySelector(".create-password");
const passInput = passField.querySelector(".password");
const cPassField = form.querySelector(".confirm-password");
const cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function checkEmail() {
const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!emailInput.value.match(emaiPattern)) {
return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
}
emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Password Validation
function createPass() {
const passPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passInput.value.match(passPattern)) {
return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
}
passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
if (passInput.value !== cPassInput.value || cPassInput.value === "") {
return cPassField.classList.add("invalid");
}
cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
e.preventDefault(); //preventing form submitting
checkEmail();
createPass();
confirmPass();

//calling function on key up
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);

if (
!emailField.classList.contains("invalid") &&
!passField.classList.contains("invalid") &&
!cPassField.classList.contains("invalid")
) {
location.href = form.getAttribute("action");
}
});