let numberOne = ''
let numberTwo = ''
let znak = ''
let result = '0'

let h1 = document.querySelector('.result')

function num1() {

  if (result != 0) {
    location.reload()
  }

  if (znak === '') {
    numberOne += '1'
    h1.innerHTML = numberOne 
  }

  if (znak != '') {
    numberTwo += '1'
    h1.innerHTML = numberTwo
  }

}

function num2() {

  if (result != 0) {
    location.reload()
  }

  if (znak === '') {
    numberOne += '2'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '2'
    h1.innerHTML = numberTwo
  }

}

function num3() {

  if (result != 0) {
    location.reload()
  }

  if (znak === '') {
    numberOne += '3'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '3'
    h1.innerHTML = numberTwo
  }

}

function num4() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '4'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '4'
    h1.innerHTML = numberTwo
  }

}

function num5() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '5'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '5'
    h1.innerHTML = numberTwo
  }

}

function num6() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '6'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '6'
    h1.innerHTML = numberTwo
  }

}

function num7() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '7'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '7'
    h1.innerHTML = numberTwo
  }

}

function num8() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '8'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '8'
    h1.innerHTML = numberTwo
  }

}

function num9() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '9'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '9'
    h1.innerHTML = numberTwo
  }

}

function num0() {

  if (result != 0) {
    location.reload()
  }
  
  if (znak === '') {
    numberOne += '0'
    h1.innerHTML = numberOne
  }

  if (znak != '') {
    numberTwo += '0'
    h1.innerHTML = numberTwo
  }

}

function plus() {
  znak = '+'
}

function minus() {
  znak = '-'
}

function ymozit() {
  znak = '*'
}

function podelit() {
  znak = '/'
}

function bacspace() {
  location.reload()
}

function rovno() {

  if (znak === '+'){
    result = Number(numberOne) + Number(numberTwo)
    h1.innerHTML = result
  }

  if (znak === '-'){
    result = Number(numberOne) - Number(numberTwo)
    h1.innerHTML = result
  }

  if (znak === '*'){
    result = Number(numberOne) * Number(numberTwo)
    h1.innerHTML = result
  }

  if (znak === '/'){
    result = Number(numberOne) / Number(numberTwo)
    h1.innerHTML = result
  }

  if (znak === '') {
    alert('ошибка, знак не выбран')
  }

}
