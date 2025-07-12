const calculateBtn = document.getElementById("calBtn");

function calculateRequiredSavings(total, months, current) {
  const remaining = total - current;
  const requiredSavingPerMonth = remaining / months;
  return requiredSavingPerMonth;
}

function handleButtonClick() {
  const totalInputElement = document.getElementById("total");
  const monthsInputElement = document.getElementById("months");
  const currentInputElement = document.getElementById("currentSave");
  const resultElement = document.getElementById("result");

  const total = totalInputElement.value;
  const months = monthsInputElement.value;
  const current = currentInputElement.value;
  const requiredSaving = calculateRequiredSavings(total, months, current);

  resultElement.innerText =
    "You need to save Rs." + requiredSaving + " per month.";
}

calculateBtn.addEventListener("click", handleButtonClick);