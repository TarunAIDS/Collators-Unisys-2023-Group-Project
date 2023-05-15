const feedbackForm = document.getElementById("feedback-form");
const emailInput = document.getElementById("email-input");
const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateForm() {
  if (nameInput.value == "" || emailInput.value == "") {
    alert("Enter all details!");
    return false;
  }
  if (!validateEmail(emailInput.value)) {
    alert("Enter valid email!");
    return false;
  }
  return true;
}

submitBtn.addEventListener("click", function() {
  if (validateForm()) {
    feedbackForm.submit();
  }
});
