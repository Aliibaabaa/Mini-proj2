$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#student").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#student").removeClass("active");
	}
});
$(window).trigger("hashchange");

        const formsu = document.getElementById('forms');
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const gradeLevel = document.getElementById('gradeLevel');
        const section = document.getElementById('section');


        formsu.addEventListener('submit',function(e){
            e.preventDefault();

            const firstNameValue = firstName.value;
            const lastNameValue = lastName.value;
            const gradeLevelValue = gradeLevel.value;
            const sectionValue = section.value

            // localStorage.setItem('myObject',JSON.stringify([firstNameValue, lastNameValue]))

            localStorage.setItem('first-name', firstNameValue);
            localStorage.setItem('last-name', lastNameValue);
            localStorage.setItem('grade-level', gradeLevelValue);
            localStorage.setItem('sec-tion', sectionValue);

            window.location.href = "miniproj_mainInteractive.html";
        })


const usernameEl = document.querySelector('#userName');
const emailEl = document.querySelector('#Email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirmPassword');

const form = document.querySelector('form');


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('.link', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'userName':
            checkUsername();
            break;
        case 'Email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirmPassword':
            checkConfirmPassword();
            break;
    }
}));

const forms = document.querySelector(".forms");
const links =document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
     e.preventDefault(); //preventing form submit
     forms.classList.toggle("show-signup");
    })
    })

    let validateForm =() => {
        let x =  document.forms["login"]["usernamel"].value["passwordl"].value;
        if (x ==" "){
            alert("input must not be blank");
            return false;
        }
    }
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
