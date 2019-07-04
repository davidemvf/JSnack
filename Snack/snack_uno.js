// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
var primo = parseInt(prompt("Inserisci il primo numero"));
var secondo = parseInt(prompt("Inserisci il secondo numero"));

if (primo > secondo) {
  document.getElementById("mio_id").innerHTML = primo;
} else if (primo < secondo) {
  document.getElementById("mio_id").innerHTML = secondo;
} else {
  document.getElementById("mio_id").innerHTML = "I numeri inseriti hanno lo stesso valore";
}
