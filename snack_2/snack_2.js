// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga. 8 min

var parola_uno = prompt("Inserisci la prima parola");
var parola_due = prompt("Inserisci la seconda parola");

if (parola_uno.length > parola_due.length){
  document.getElementById('mio_id').innerHTML = parola_uno;
  document.getElementById('mio_iddue').innerHTML = parola_due;
} else if (parola_uno.length < parola_due.length){
  document.getElementById('mio_id').innerHTML = parola_due;
  document.getElementById('mio_iddue').innerHTML = parola_uno;
} else{
  document.getElementById('mio_id').innerHTML = "Le due parole hanno la stessa lunghezza";
}
