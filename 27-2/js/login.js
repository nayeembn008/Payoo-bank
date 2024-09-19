// document.getElementById("id").addEventListener("click", fun)

// search: form submit reloading the page

// Step 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // Step 2: prevent default behaviour
    event.preventDefault();
    console.log("login button clicked");

    // Step 3: Get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
