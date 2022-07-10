const form = document.querySelector(".form");
const usernameInputField = document.querySelector("#username");
const emailInputField = document.querySelector("#email");
const passwordInputField = document.querySelector("#password");
const confirmPasswordInputField = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".error-message");

// Functions required in form validation

// 1. Function to show error if required input field is empty

function showErrorOfEmptyField(inputField) {
  inputField.nextElementSibling.innerText = "Required fields can not be empty";
  inputField.classList.add("error");
}

// 2. Function to show error if input field is inavlid

function showErrorOfInvalidField(inputField, message) {
  inputField.nextElementSibling.innerText = message;
  inputField.classList.add("error");
}

// 3. Function to perform if input field is valid

function showSuccessOfValidField(inputField, message) {
  inputField.nextElementSibling.innerText = message;
  inputField.classList.remove("error");
}

// Functions for "Form input fields validation"

// 1. Function for "username field validation"

let isUsernameValid = function usernameValidation() {
  if (
    usernameInputField.value.length < 6 ||
    usernameInputField.value.length > 12
  ) {
    showErrorOfInvalidField(
      usernameInputField,
      "username should be 6 to 12 characters long"
    );
  } else {
    showSuccessOfValidField(usernameInputField, "");
    return true;
  }
};

// 2. Function for "email field validation"

let isEmailValid = function emailValidation() {
  if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailInputField.value
    )
  ) {
    showSuccessOfValidField(emailInputField, "");
    return true;
  } else {
    showErrorOfInvalidField(emailInputField, "please enter valid email");
  }
};

// 3. Function for "password field validation"

let isPasswordValid = function passwordValidation() {
  if (
    passwordInputField.value.length < 8 ||
    passwordInputField.value.length > 18
  ) {
    showErrorOfInvalidField(
      passwordInputField,
      "password should be 8 to 18 characters long"
    );
  } else {
    showSuccessOfValidField(passwordInputField, "");
    return true;
  }
};

// 4. Function for "confirm password field validation"

let isConfirmPasswordValid = function confirmPasswordValidation() {
  if (confirmPasswordInputField.value == passwordInputField.value) {
    showSuccessOfValidField(confirmPasswordInputField, "");
    return true;
  } else {
    showErrorOfInvalidField(
      confirmPasswordInputField,
      "password does not match"
    );
  }
};

// Form Validation

form.addEventListener("keyup", function (event) {
  // 1. username validation
  if (event.target == usernameInputField) {
    isUsernameValid();
    // if (
    //   usernameInputField.value.length < 6 ||
    //   usernameInputField.value.length > 12
    // ) {
    //   showErrorOfInvalidField(
    //     usernameInputField,
    //     "username should be 6 to 12 characters long"
    //   );
    // } else {
    //   showSuccessOfValidField(usernameInputField, "");
    // }
  }

  // 2. email validation
  if (event.target == emailInputField) {
    isEmailValid();
    // if (
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //     emailInputField.value
    //   )
    // ) {
    //   showSuccessOfValidField(emailInputField, "");
    // } else {
    //   showErrorOfInvalidField(emailInputField, "please enter valid email");
    // }
  }

  // 3. password validation
  if (event.target == passwordInputField) {
    isPasswordValid();
    // if (
    //   passwordInputField.value.length < 8 ||
    //   passwordInputField.value.length > 18
    // ) {
    //   showErrorOfInvalidField(
    //     passwordInputField,
    //     "password should be 8 to 18 characters long"
    //   );
    // } else {
    //   showSuccessOfValidField(passwordInputField, "");
    // }
  }

  // 4. confirm password validation
  if (event.target == confirmPasswordInputField) {
    isConfirmPasswordValid();
    // if (confirmPasswordInputField.value == passwordInputField.value) {
    //   showSuccessOfValidField(confirmPasswordInputField, "");
    // } else {
    //   showErrorOfInvalidField(
    //     confirmPasswordInputField,
    //     "password does not match"
    //   );
    // }
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    usernameInputField.value.length == 0 ||
    emailInputField.value.length == 0 ||
    passwordInputField.value.length == 0 ||
    confirmPasswordInputField.value.length == 0
  ) {
    if (usernameInputField.value.length == 0) {
      showErrorOfEmptyField(usernameInputField);
    }
    if (emailInputField.value.length == 0) {
      showErrorOfEmptyField(emailInputField);
    }
    if (passwordInputField.value.length == 0) {
      showErrorOfEmptyField(passwordInputField);
    }
    if (confirmPasswordInputField.value.length == 0) {
      showErrorOfEmptyField(confirmPasswordInputField);
    }
  }
  //   if (usernameInputField.value.length == 0) {
  //     showErrorOfEmptyField(usernameInputField);
  //   }
  //   if (emailInputField.value.length == 0) {
  //     showErrorOfEmptyField(emailInputField);
  //   }
  //   if (passwordInputField.value.length == 0) {
  //     showErrorOfEmptyField(passwordInputField);
  //   }
  //   if (confirmPasswordInputField.value.length == 0) {
  //     showErrorOfEmptyField(confirmPasswordInputField);
  //   }
  else {
    if (
      isUsernameValid() &&
      isEmailValid() &&
      isPasswordValid() &&
      isConfirmPasswordValid()
    ) {
      console.log(2);

      document.querySelector(".form-submitted").innerText =
        "Form Submitted successfully";
      console.log("form submitted succesfully");
    }
  }
});
