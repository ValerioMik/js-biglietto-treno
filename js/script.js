/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Aggiungerei: ocio  a non incasinarvi sui calcoli matematici, alla fine dovete applicare, in certe condizioni, degli sconti in percentuale (come fare? */

/* chiediamo all'utenete quanti chilometri deve percorrere */

const kiloMetri= parseInt(prompt("Prego inserire i chilometri che vuoi percorrere"));
/* calcoliamo km per przzo al km(0.21 al km) */
let costoBase= kiloMetri*0.21;
/* chiediamo all'utenete quanti anni ha */
const etaPasseggero= parseInt(prompt("Prego inserire la propria Eta"));

/* se il cliente a meno di 18 anni impostiamlo uno sconto del 20% */
/*  se altrimenti  il cliente a piu di 65 anni impostiamlo uno sconto del 40% */
/* se il cliente a tra i 18 e 64 anni il prezzo sara normale */
let risultato;

if (etaPasseggero < 18) {
    risultato = Math.round(costoBase-costoBase*20/100);
    document.getElementById("myid").innerHTML = `Complimenti hai ricevuto uno sconto del 20% il prezzo del biglietto era ${costoBase}euro invece pagherai ${risultato}euro`
} else if (etaPasseggero > 65) {
    risultato = Math.round(costoBase-costoBase*40/100);
    document.getElementById("myid").innerHTML = `Complimenti hai ricevuto uno sconto del 40% il prezzo del biglietto era ${costoBase}euro invece pagherai ${risultato}euro`
} else {
    risultato = Math.round(costoBase);
    document.getElementById("myid").innerHTML = `il prezzo del biglietto è ${risultato}euro`
}

/* stampiamo a schermo il prezzo del biglietto con un  massimo due decimali */
