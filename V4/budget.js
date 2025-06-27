const beskrivning  = document.getElementById("beskrivning");
const belopp       = document.getElementById("belopp");
const inkomstBtn   = document.getElementById("inkomst");
const utgiftBtn    = document.getElementById("utgift");
const saldoText    = document.getElementById("saldo");

const inkomstLista = document.getElementById("inkomstlista");
const utgiftLista  = document.getElementById("utgiftlista");

let inkomster = [];
let utgifter  = [];

// Lägg till inkomst
inkomstBtn.addEventListener("click", () => {
  const text  = beskrivning.value.trim();
  const summa = parseFloat(belopp.value);

  if (text && !isNaN(summa) && summa > 0) {
    inkomster.push({ text, summa });

    const li = document.createElement("li");
    li.textContent = `${text}: +${summa.toFixed(2)} kr`;
    inkomstLista.appendChild(li);

    uppdateraSaldo();
    beskrivning.value = "";
    belopp.value      = "";
  }
});

// Lägg till utgift
utgiftBtn.addEventListener("click", () => {
  const text  = beskrivning.value.trim();
  const summa = parseFloat(belopp.value);

  if (text && !isNaN(summa) && summa > 0) {
    utgifter.push({ text, summa });

    const li = document.createElement("li");
    li.textContent = `${text}: -${summa.toFixed(2)} kr`;
    utgiftLista.appendChild(li);

    uppdateraSaldo();
    beskrivning.value = "";
    belopp.value      = "";
  }
});

function uppdateraSaldo() {
  const totalInkomst = inkomster.reduce((acc, t) => acc + t.summa, 0);
  const totalUtgift  = utgifter.reduce((acc, t) => acc + t.summa, 0);
  saldoText.textContent = (totalInkomst - totalUtgift).toFixed(2);
}

