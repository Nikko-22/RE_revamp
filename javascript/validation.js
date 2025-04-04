document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const form = e.target;
  const selects = form.querySelectorAll("select");
  const inputs = form.querySelectorAll("input[type='number']");
  const errorMessages = form.querySelectorAll(".error-message");

  // Clear previous errors
  errorMessages.forEach((msg) => (msg.textContent = ""));

  // Validate selects
  selects.forEach((select) => {
    const error = select.parentElement.querySelector(".error-message");
    if (!select.value) {
      error.textContent = "Please select an option.";
      error.style.color = "red";
      isValid = false;
    }
  });

  // Validate min/max price
  const minPrice = form.querySelector("#minPrice");
  const maxPrice = form.querySelector("#maxPrice");

  const minError = minPrice.parentElement.querySelector(".error-message");
  const maxError = maxPrice.parentElement.querySelector(".error-message");

  if (minPrice.value && minPrice.value < 0) {
    minError.textContent = "Minimum price must be 0 or more.";
    isValid = false;
  }

  if (maxPrice.value && maxPrice.value < 0) {
    maxError.textContent = "Maximum price must be 0 or more.";
    isValid = false;
  }

  if (
    minPrice.value &&
    maxPrice.value &&
    parseInt(minPrice.value) > parseInt(maxPrice.value)
  ) {
    maxError.textContent =
      "Max price must be greater than or equal to min price.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // form.submit(); // Uncomment this line to actually submit
  }
});
