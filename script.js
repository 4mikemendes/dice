// dice
let numberEl = document.getElementById("number-el")
console.log(numberEl)

function dice() {
let randomNumber = Math.floor(Math.random() * 6) + 1
return randomNumber
}
console.log(dice())

numberEl.textContent = dice()
