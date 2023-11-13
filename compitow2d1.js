//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* 
let primoNumero = 55;
let secondoNumero = 71;
let numeroMaggiore;

if (primoNumero > secondoNumero) {
  numeroMaggiore = primoNumero;
  console.log (numeroMaggiore + " è più grande!")
} else {
  numeroMaggiore = secondoNumero;
  console.log (numeroMaggiore + " è più grande!")
} 
*/


/* ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
let myNumber = 14;

if (myNumber < 5) {
    console.log("Tiny");
} else if (myNumber < 10) {
    console.log("Small");
} else if (myNumber < 15) {
    console.log("Medium");
} else if (myNumber < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}
*/


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for (let n = 0; n <= 10; n++) {
  if (n === 3 || n === 8) {
      continue;
  }
  console.log(n);
}
*/


/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 
for (let n = 0; n <= 15; n++) {
  if (n % 2 === 0) {
      console.log(n + " è un numero pari");
  } else {
      console.log(n + " è un numero dispari");
  }
}
*/


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
let primoNumero = 30;
let secondoNumero = 38;

if (primoNumero === 8 || secondoNumero === 8) {
    console.log("Uno dei numeri è 8");
} else if (primoNumero + secondoNumero === 8) {
    console.log("La somma è 8");
} else if (primoNumero - secondoNumero === 8 || secondoNumero - primoNumero === 8) {
    console.log("La differenza è 8");
}
*/


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart = 50;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Spese di spedizione gratuite!")
  console.log("Il tuo totale è " + totalShoppingCart)
} else {
  let totalCost = totalShoppingCart + shippingCost;
  console.log("Il tuo totale è " + totalCost)
}
*/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart = 50;
let shippingCost = 10;
let discount = (totalShoppingCart * 20) / 100;
let finalPrice = totalShoppingCart - discount;

if (finalPrice > 50) {
  console.log("Spese di spedizioni gratuite!")
  console.log("Il tuo totale è " + finalPrice)
} else {
  let totalCost = finalPrice + shippingCost;
  console.log("Il tuo totale è " + totalCost)
}
*/


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let isMale = true;
let gender = isMale ? "male" : "female";
console.log("Il valore di gender è:", gender);
*/


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*
for (let n = 1; n <= 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
      console.log("FrizzBuzz");
  } else if (n % 3 === 0) {
      console.log("Fizz");
  } else if (n % 5 === 0) {
      console.log("Buzz");
  }  else {
      console.log(n);
  }
}
*/