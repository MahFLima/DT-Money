import 'https://unpkg.com/phosphor-icons';
let wallet = []
const content = document.querySelector(".content");

const btn = document.querySelector(".btn");
const exit = document.querySelector(".exit");
const transaction = document.querySelector(".transaction");
const register = document.querySelector(".register");
const btnDel = document.querySelectorAll(".btn-del");
const search = document.querySelector(".search-btn")

const inpTitle = document.querySelector(".input-title");
const inpValue = document.querySelector(".input-value");
const inpDescription = document.querySelector(".input-description");
const inpSearch = document.querySelector(".inp-search");

const phEntrada = document.querySelector("#entrada");
const phSaida = document.querySelector("#saida");
const phTotal = document.querySelector("#total");

function isFloat(x) {
  if (parseInt(x) != parseFloat(x)) {
    return(x.toFixed(2))
  } else {
    return(`${x}.00`)
  }
}

function itemDelete(value){
  const result = wallet.filter((item, index) => index != value)
  wallet = result

  content.innerHTML = "<p></p>";
  cards();
  list();
}

function cards() {
  let total = 0;
  let saida = 0;
  let entrada = 0;

  wallet.map((item) => {
    total = total + item.value;
    if (item.value < 0) {
      saida = saida + item.value;
    } else {
      entrada = entrada + item.value;
    }
  });

  phEntrada.innerText = `R$ ${isFloat(entrada)}`;
  phSaida.innerText = `R$ ${isFloat(saida)}`;
  phTotal.innerText = `R$ ${isFloat(total)}`;
}

function list() {
  wallet.map((item, index) => {
    const div = document.createElement("div");
    div.setAttribute("id", index);
    div.classList.add("content-line");

    const title = document.createElement("p");
    title.innerHTML = item.title;
    const value = document.createElement("p");
    value.innerHTML = `R$ ${isFloat(item.value)}`;
    const description = document.createElement("p");
    description.innerHTML = item.description;
    const date = document.createElement("p");
    date.innerHTML = item.date;

    const btn = document.createElement("button")
    btn.classList.add('btn-del')
    btn.innerHTML = `<i class="ph-x-circle"></i>`
    btn.onclick = () => itemDelete(index)

    if (item.value < 0) {
      value.style.color = "#F75A68";
    }

    div.appendChild(title);
    div.appendChild(value);
    div.appendChild(description);
    div.appendChild(date);
    div.appendChild(btn);

    content.appendChild(div);
  });
}

list();
cards();

register.addEventListener("click", (e) => {
  e.preventDefault();
  const date = new Date().toLocaleDateString();
  const title = inpTitle.value;
  const value = parseFloat(inpValue.value);
  const description = inpDescription.value;

  wallet.push({
    title,
    value,
    description,
    date,
  });

  content.innerHTML = "<p></p>";
  cards();
  list();
});

btn.addEventListener("click", () => {
  transaction.classList.add("active");
});

exit.addEventListener("click", () => {
  transaction.classList.remove("active");
});


// search.addEventListener("click", () => {
//   const value = inpSearch.value
//   if(value.length > 0){
//     const result = value.length > 0 ? wallet.filter(item => item.title.toLowerCase().includes(value.toLowerCase())):[]
//   }

//   content.innerHTML = "<p></p>";
//   cards();
//   list();
// })




