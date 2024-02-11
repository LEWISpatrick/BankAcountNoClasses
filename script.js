// Giving names to the things

let withDraw = document.getElementById('withDraw')
let deposit = document.getElementById('deposit')
let input = document.getElementById('input')
let deleteBank = document.getElementById('deleteBank')
let createBank = document.getElementById('createBank')
// acount text and erros
let acountH1 = document.getElementById('acount')
let erros = document.getElementById('errors')
let success = document.getElementById('success')


// acount information
let acountBalance = 0

acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${acountBalance}</mark></b></strong>`

// Deposit Function
deposit.addEventListener('click', function deposit() {
  acountBalance += Number(input.value)
  console.log(acountBalance)
  acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${acountBalance}</mark></b></strong>`
  SuccessDep()
})

// withDraw function 
withDraw.addEventListener('click', function withDraw() {
  if (acountBalance < input.value) {
    erro()

  } else {
    acountBalance -= Number(input.value)
    acountH1.innerHTML = `<strong><b>You have in your acount : <mark>${acountBalance}</mark></b></strong>`
    SuccessWithDraw()

  }
})

function SuccessDep() {
  success.innerHTML = `Success! deposit of: <mark>${Number(input.value)}</mark>`; // Display the transaction amount
  erros.innerHTML = ``
}
function SuccessWithDraw() {
  success.innerHTML = `Success! WithDraw of: <mark>${Number(input.value)}</mark>`; // Display the transaction amount
  erros.innerHTML = ``
}

function erro() {
  erros.innerHTML = `SHUT UP BROKIE!!!`
  success.innerHTML = ``
}
