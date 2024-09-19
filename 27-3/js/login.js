// document.getElementById("id").addEventListener("click", fun)

// search: form submit reloading the page

// Step 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // Step 2: prevent default behaviour
    event.preventDefault();

    // Step 3: Get the phone number
    const phoneNumber = document.getElementById("phone-number").value;

    // Step 4: Get the pin number
    const pinNumber = document.getElementById("pin-number").value;

    console.log(phoneNumber, pinNumber);

    // Step 4: Validate phone and pin
    // this is temporary. You should not do like this
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      // Step 5: Allow user to use the website
      window.location.href = "home.html";
    } else {
      alert("wrong phone number or pin");
    }
  });
