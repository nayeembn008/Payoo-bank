// step 1: event handler of add money
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step 2: get get money to be added to the account
    const addMoneyInput = Number(
      document.getElementById("input-add-money").value
    );
    console.log(addMoneyInput);

    // step 3: get the number provided
    const pinNumberInput = Number(
      document.getElementById("input-pin-number").value
    );
    console.log(pinNumberInput);
  });
