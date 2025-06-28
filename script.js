const desc        = document.getElementById("desc");
const amount      = document.getElementById("amount");
const incomeBtn   = document.getElementById("incomeBtn");
const expenseBtn  = document.getElementById("expenseBtn");
const balanceOut  = document.getElementById("balance");
const incomeList  = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");


let balance = 0; 

incomeBtn.addEventListener("click", () => {
  const text = desc.value.trim();
  const val  = parseFloat(amount.value);
  if (!text || isNaN(val) || val <= 0) return;

  incomeList.appendChild(createItem(text, val, "Inkomst"));
  updateBalance(val);
  clearInputs();
});

expenseBtn.addEventListener("click", () => {
  const text = desc.value.trim();
  const val  = parseFloat(amount.value);
  if (!text || isNaN(val) || val <= 0) return;

  expenseList.appendChild(createItem(text, val, "Utgift"));
  updateBalance(-val);
  clearInputs();
});

function createItem(text, val, typ) {
  const li = document.createElement("li");
  li.textContent = `${text} - ${val} kr (${typ})`;
  return li;
}

function updateBalance(diff) {
  balance += diff;
  balanceOut.textContent = balance.toString();
}

function clearInputs() {
  desc.value = "";
  amount.value = "";
  desc.focus();
}
