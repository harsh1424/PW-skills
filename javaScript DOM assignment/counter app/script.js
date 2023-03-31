const decrementBtn = document.getElementById("decrementBtn")
const incrementBtn = document.getElementById("incrementBtn")
const displayValue = document.getElementById("displayValue")
const resetValue = document.getElementById("resetValue")

decrementBtn.addEventListener("click", () => {
    let value = Number(displayValue.innerText)
    value = value - 1
    displayValue.innerText = value
})
incrementBtn.addEventListener("click", () => {
    let value = Number(displayValue.innerText)
    value = value + 1
    displayValue.innerText = value
})

resetValue.addEventListener("click", () => {
    displayValue.innerText = 0
} )