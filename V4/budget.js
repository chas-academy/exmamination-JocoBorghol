const beskrivning = document.getElementById("beskrivning");
const belopp = document.getElementById("belopp");
const inkomstBtn = document.getElementById("inkomst");
const utgiftBtn = document.getElementById("utgift");
const saldoText = document.getElementById("saldo");
const inkomstLista = document.getElementById("inkomstlista");
const utgiftsLista = document.getElementById("utgiftslista");

let inkomster = [];
let utgifter = [];

inkomstBtn.addEventListener("click", function () {
  const text = beskrivning.value.trim();
  const summa = parseFloat(belopp.value);

utgiftBtn.addEventListener("click", function () {
  const text = beskrivning.value.trim();
  const summa = parseFloat(belopp.value);

  if (text && !isNaN(summa) && summa > 0) {
    utgifter.push({ text, summa });
    const li = document.createElement("li");
    li.textContent = `${text}: -${summa.toFixed(2)} kr`;
    utgiftsLista.appendChild(li);
    uppdateraSaldo();
    beskrivning.value = "";
    belopp.value = "";
  }
});

function uppdateraSaldo() {
  const totalInkomst = inkomster.reduce((acc, t) => acc + t.summa, 0);
  const totalUtgift = utgifter.reduce((acc, t) => acc + t.summa, 0);
  const saldo = totalInkomst - totalUtgift;
  saldoText.textContent = saldo.toFixed(2);
}

