const total = document.getElementById("total");
const billInput = document.getElementById("bill-input");
const resetButton = document.getElementById("reset-button");

let bill = 0;

billInput.addEventListener("input", (event) => {
  bill = Number(event.target.value);
});

const calculateTip = (percent) => {
  if (!bill) {
    alert("Enter bill");
    return;
  }

  const tip = (bill / 100) * percent + bill;
  total.innerHTML = `Total ${tip}`;
};
