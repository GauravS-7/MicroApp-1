const calButton = document.getElementById("calBtn");

function splitBill(total, person) {
  const splitAmt = total / person;
  return splitAmt.toFixed(2);
}

function handleButtonClick() {
  const totalAmountElement = document.getElementById("totalBill");
  const totalPeopleElement = document.getElementById("numPeople");
  const resultElement = document.getElementById("splitResult");

  const total = totalAmountElement.value;
  const person = totalPeopleElement.value;
  const splitAmount = splitBill(total, person);

  resultElement.innerText = "Each person needs to pay: ₹" + splitAmount;
}
calButton.addEventListener("click", handleButtonClick);