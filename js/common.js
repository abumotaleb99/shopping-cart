function getTextElementValueById(elementId) {
  const totalElement = document.getElementById(elementId);
  const totalString = totalElement.innerText;
  const total = parseInt(totalString);

  return total;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);

  // Calculate Tax
  const taxAmountString = (currentCaseTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  const total = currentSubTotal + taxAmount;
  setTextElementValueById("total", total);
}

calculateSubTotal();
