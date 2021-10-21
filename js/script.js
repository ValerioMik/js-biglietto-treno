/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Aggiungerei: ocio  a non incasinarvi sui calcoli matematici, alla fine dovete applicare, in certe condizioni, degli sconti in percentuale (come fare? */

/* chiediamo all'utenete quanti chilometri deve percorrere */

const kiloMetri= parseInt(prompt("Prego inserire i chilometri che vuoi percorrere"))

console.log(kiloMetri) 

/* calcoliamo km per przzo al km(0.21 al km) */

let somma= kiloMetri*0.21

console.log(somma)

/* chiediamo all'utenete quanti anni ha */

const etaPassegiero= parseInt(prompt("Prego inserire la propria Eta"))

console.log(etaPassegiero)

/* se il cliente a meno di 18 anni impostiamlo uno sconto del 20% */
/*  se altrimenti  il cliente a piu di 65 anni impostiamlo uno sconto del 40% */
/* se il cliente a tra i 18 e 64 anni il prezzo sara normale */

let risultato


if(etaPassegiero<18){
    risultato=Math.round(somma-somma*20/100);

}else if (etaPassegiero>65){
    risultato=Math.round(somma-somma*40/100);

}else{
    risultato=somma
}
/* console.log(risultato) */
document.getElementById("myid").innerHTML = `Il prezzo del tuo biglietto è ${risultato}`



/* stampiamo a schermo il prezzo del biglietto con un  massimo due decimali */
