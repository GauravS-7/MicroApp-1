const calcButton = document.getElementById("calculateBtn");

      function discountValue(total, discount) {
        const discountAmount = (total * discount) / 100;
        return discountAmount.toFixed(2);
      }

      function finalAmount(total, totalSavedAmt) {
        const finalPrice = total - totalSavedAmt;
        return finalPrice.toFixed(2);
      }

      function handleButtonClick() {
        const totalAmountElement = document.getElementById("totalAmt");
        const discountElement = document.getElementById("discountPer");
        const resultElement = document.getElementById("discountResult");

        const total = totalAmountElement.value;
        const discount = discountElement.value;
        const totalSavedAmt = discountValue(total, discount);
        const finalPrice = finalAmount(total, totalSavedAmt);

        resultElement.innerText =
          "You saved ₹" +
          totalSavedAmt +
          ". Finale price is ₹" +
          finalPrice +
          ".";
      }

      calcButton.addEventListener("click", handleButtonClick);