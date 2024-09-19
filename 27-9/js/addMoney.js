// step 1: event handler of add money
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step 2: get get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // step 3: get the number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(typeof pinNumberInput);

    // Step 4: verify the pin
    // Wrong way to validate pin number
    if (pinNumberInput === "1234") {
      // console.log("Adding money to your account");

      // Step 5: Get the current balance
      const balance = document.getElementById("account-balance").innerText;
      // console.log(typeof balance);

      // step 6: add addMoneyInput with balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber + addMoneyNumber;
      // console.log(newBalance);

      // step 7: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      console.log("Failed to add money! Please try again");
    }
  });
