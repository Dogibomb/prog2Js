/*****************************************************************

console.log("hello world")
console.warn("hello world")
console.error("hello world")
console.table("hello world")

*****************************************************************

let num1 = prompt("zadej prvni cislo: ")
let num2 = prompt("zadej druhy cislo: ")

num1 = parseInt(num1)
num2 = parseInt(num2)

let vysledek = num1 + num2
console.log(vysledek)
 
*****************************************************************

let input = prompt("zadejte cislo: ")
input = parseInt(input)

if (input % 2 === 0){
    console.log("je sude")
}
else{
    console.log("je liche")
}
 
*****************************************************************

let input = prompt("zadejte teplotu v celsia: ")
input = parseFloat(input)

let vysledek = input * 9/5 + 32
console.log(vysledek)
 
*****************************************************************

let input = prompt("zadejte cislo: ")
input = parseInt(input)

if (input > 0){
    console.log("cislo je kladne")
}
else if(input < 0){
    console.log("cislo je zaporne")
}
else{
    console.log("cislo je nula")
}
 
*****************************************************************

let input = prompt("zadejte slovo")
if (input.includes("a")){
    console.log("slovo obsahuje a")
}
else{
    console.log("slovo neobsahuje a")
}
 
*****************************************************************/

// Uloha: Analyzátor textu

/**

* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.

* Použij .include() nad zadaným slovem. Vypiš do konzole.

*/
 
let input = prompt("zadejte slovo")
input = input.toLowerCase()
inputletters = {}

for(let letter of input){
    console.log(letter)
}

/*****************************************************************/

// 6️⃣ Zjisti, zda zadané číslo je prvočíslo

/**

* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,

* zda je číslo prvočíslo či nikoliv.

*/
 
// zde bude tvoje řešení
 
 






/*****************************************************************

// Příklady na práci se **scope (zastínění proměnné)**
 
let x = 10; // globální scope
 
function prikladScope() {

    let x = 5; // lokální scope – zastínění globální x

    console.log("Lokální x: " + x); // 5

}
 
prikladScope();

console.log("Globální x: " + x); // 10
 
*****************************************************************

// Příklad **redeclaration proměnné**
 
var a = 5;

var a = 10; // var umožňuje redeklaraci

console.log(a); // 10
 
// let b = 5;

// let b = 10; // chybové, let neumožňuje redeklaraci
 
*****************************************************************

// # 🔹 Rozdíl mezi `==` a `===`

console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje

console.log(5 === "5"); // false -> porovnává hodnotu i typ
 
*****************************************************************/
