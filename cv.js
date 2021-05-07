let object = {
    naam: "Lalena ",
    achternaam: "De Ridder",
    tussennamen: ["Sue", "Eloise"],
    sterrenbeeld: "schorpioen",
    verjaardag: 3,
    verjaarmaand: " november",
    woon: {"België" :["Dendermonde", "Bostroe"] },
    food: {"koud" :["ijs", "toastjes"], "warm" :["pizza", "pasta"] }
}


console.log ("Mijn naam is " + object.naam + object.achternaam)
console.log ("1 van mijn tussennamen is " + object.tussennamen[1])
console.log("Ik woon in " + object.woon.België[1])
console.log ("Geef mij maar " + object.food.koud[1])

let output = "ik ben jarig op " + object.verjaardag + object.verjaarmaand
console.log(output);