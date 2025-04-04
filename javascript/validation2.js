document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Get error containers
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMessage = document.getElementById("error-message");

  // Clear previous errors
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim().length < 2) {
    errorName.textContent = "Please enter your name (min 2 characters).";
    errorName.style.color = "red";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Please enter a valid email address.";
    errorEmail.style.color = "red";
    isValid = false;
  }

  // Message validation
  if (message.value.trim().length < 10) {
    errorMessage.textContent = "Message should be at least 10 characters.";
    errorMessage.style.color = "red";
    isValid = false;
  }

  // If all fields are valid, you can proceed
  if (isValid) {
    alert("Form submitted successfully!");
    // Here, you can also actually submit the form or send data via fetch()
  }
});
