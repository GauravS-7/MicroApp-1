function convertUsdToInr(usd) {
    const conversionRate = 85.86;
    const inr = usd * conversionRate;
    return inr.toFixed(2);
  }

  function calculateConversions() {
    const usdInputElement = document.getElementById("usdAmount");
    const resultElement = document.getElementById("resultCC");
    const usdValue = usdInputElement.value;
    const inrValue = convertUsdToInr(usdValue);
    resultElement.innerText =
      usdValue + " USD equals in INR " + inrValue + ".";
  }

  const convertBtn = document.getElementById("convertBtn");
  convertBtn.addEventListener("click", calculateConversions);