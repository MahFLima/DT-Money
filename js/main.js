import wallet from './data.js'

const content = document.querySelector('.content')

const btn = document.querySelector('.btn')
const exit = document.querySelector('.exit')
const transaction = document.querySelector('.transaction')
const register = document.querySelector('.register')

const inpTitle = document.querySelector('.input-title')
const inpValue = document.querySelector('.input-value')
const inpDescription = document.querySelector('.input-description')

const phEntrada = document.querySelector("#entrada")
const phSaida = document.querySelector("#saida")
const phTotal = document.querySelector("#total")

function formatValue(value){
  
}

function cards(){
  let total = 0
  let saida = 0
  let entrada = 0

  wallet.map((item) => {
    total = total + item.value
    if(item.value < 0){
      saida = saida + item.value
    } else {
      entrada = entrada + item.value
    }
  })
  
  phEntrada.innerText = `R$ ${entrada}`
  phSaida.innerText = `R$ ${saida}`
  phTotal.innerText = `R$ ${total}`
}

function list() {
  wallet.map((item, index) => {
    const div = document.createElement("div")
    div.setAttribute('id', index)
    div.classList.add("content-line")

    const title = document.createElement("p")
    title.innerHTML = item.title
    const value = document.createElement("p")
    value.innerHTML = `R$ ${item.value}`
    const description = document.createElement("p")
    description.innerHTML = item.description
    const date = document.createElement("p")
    date.innerHTML = item.date

    if (item.value < 0) {
      value.style.color = '#F75A68'
    }

    div.appendChild(title)
    div.appendChild(value)
    div.appendChild(description)
    div.appendChild(date)

    content.appendChild(div)

  })
}

list()
cards()

register.addEventListener('click', (e) => {
  e.preventDefault()
  const date = new Date().toLocaleDateString();
  const title = inpTitle.value
  const value = parseFloat(inpValue.value)
  const description = inpDescription.value

  wallet.push(
    {
      title,
      value,
      description,
      date
    }
  )

  console.log(wallet)
  
  content.innerHTML = "<p></p>"
  cards()
  list()
})

btn.addEventListener('click', () => {
  transaction.classList.add('active')
})

exit.addEventListener('click', () => {
  transaction.classList.remove('active')
})




