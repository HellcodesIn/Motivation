//Taking quotes.js 
import * as QA from '/Unrelated/quotes.js';

//taking the elements from DOM
const GENERATE = document.getElementById("generate");
const QUOTE = document.getElementById("quote");
const AUTHOR = document.getElementById("author");


//number that determines the index of the array (not defined yet)
let index;



//Event that fires after clicking "GENERATE"
GENERATE.onclick = ()=> {
    //Randing thr no.
    index = Math.round(Math.random()*10);
    QUOTE.textContent = `"${QA.quotes[index]}"`;
    AUTHOR.textContent = `${QA.authors[index]}`;
}
