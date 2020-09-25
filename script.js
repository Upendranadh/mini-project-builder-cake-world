/*Fill your code */
// DOM elements fpr button
let chocolate = document.getElementById("1");
let strawBerry = document.getElementById("2");
let butterScotch = document.getElementById("3");
let vanilla = document.getElementById("4");
let redvelvet = document.getElementById("5");
let buy = document.getElementById("6");

let cakeContainer = document.querySelector(".cakepage_cake");

// setting up the state and data
state = {
  previousid: 0,
  isVisible: [false, false, false, false, false],
  totalPrice: 0,
  isTotalprice: false,
};

items = [
  { flavour: "chocolate", price: 300 },
  { flavour: "StrawBerry", price: 100 },
  { flavour: "Butterscotch", price: 200 },
  { flavour: "Vanilla", price: 250 },
  { flavour: "Redvelvet", price: 350 },
];
// itemsCartPrice = [];

// render method to render the cake to screen
const render = (id) => {
  let layer = document.querySelector(`#layer${id}`);
  if (state.isVisible[id - 1]) {
    layer.style.height = 0;
  }
  if (!state.isVisible[id - 1]) {
    layer.style.visibility = "visible";
    layer.style.height = "40px";
  } else {
    layer.style.visibility = "hidden";
  }
  renderBoard(id);
  state.isVisible[id - 1] = !state.isVisible[id - 1];
};

//adding event listener to the button

const renderEvent = (event) => {
  let id = event.target.id;
  render(id);
};

const displayTotalPrice = () => {
  if (!state.isTotalprice && state.totalPrice) {
    let html = `<div class="cakepage_content--lists-padding">Total Price:${state.totalPrice}</div>`;
    if (state.totalPrice && !state.isTotalprice)
      document.querySelector(".price").insertAdjacentHTML("beforeEnd", html);
    state.isTotalprice = true;
  } else if (state.totalPrice) {
    alert("already purchased");
  }

  //   state.totalPrice = 0;
};

chocolate.addEventListener("click", renderEvent);
strawBerry.addEventListener("click", renderEvent);
butterScotch.addEventListener("click", renderEvent);
vanilla.addEventListener("click", renderEvent);
redvelvet.addEventListener("click", renderEvent);
buy.addEventListener("click", displayTotalPrice);

// rendering the Items in the chalk board event
const idGenertor = (id) => {
  id = parseInt(id);
  console.log(id);
  switch (id) {
    case 1: {
      return "one";
    }

    case 2: {
      return "two";
    }

    case 3: {
      return "three";
    }

    case 4: {
      return "four";
    }

    case 5: {
      return "five";
    }
  }
};

const renderBoard = (id) => {
  //   console.log(item);
  let div = document.createElement("div");
  div.className = `cakepage_content--lists-padding ${idGenertor(id)}`;
  div.textContent = `${items[id - 1].flavour}----------${items[id - 1].price}`;

  if (!state.isVisible[id - 1]) {
    document.querySelector(".price").appendChild(div);
    state.totalPrice += items[id - 1].price;
  } else {
    let item = document.querySelector(`.${idGenertor(id)}`);
    item.parentElement.removeChild(item);
    state.totalPrice -= items[id - 1].price;
  }
};
