var km = prompt('Quanti km devi percorrere?');
var età = prompt('Quanti anni hai?');
var prezzo = km * 0.21;
var scontoMinorenne = (prezzo * 20) / 100;
var scontoOver65 = (prezzo * 40) / 100;

if(isNaN(km) || isNaN(età)){
alert('Il primo o il secondo valore non è idoneo. Riprova.')
} else {

if(età < 18) {
  prezzo = prezzo - scontoMinorenne
  }
else if(età > 65) {
  prezzo = prezzo - scontoOver65
}

}

var outputPrezzo = document.getElementById('output');
outputPrezzo.innerText = 'Il costo del biglietto è di: ' + prezzo + '€'
