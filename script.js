// dice
let numberEl = document.getElementById("number-el")

function dice() {
let randomNumber = Math.floor(Math.random() * 6) + 1
return randomNumber
}

function Roll() {
  numberEl.textContent = dice()

}
