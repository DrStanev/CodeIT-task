const shopItems = document.querySelector(".shop-items").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page-num");
const maxItem = 8;
let index = 1;

const pagination = Math.ceil(shopItems.length / maxItem);
console.log(pagination);

prev.addEventListener("click", function () {
  index--;
  check();
  showItems();
});
next.addEventListener("click", function () {
  index++;
  check();
  showItems();
});

function check() {
  if (index == pagination) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }

  if (index == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
}

function showItems() {
  for (let i = 0; i < shopItems.length; i++) {
    shopItems[i].classList.remove("show");
    shopItems[i].classList.add("hide");

    if (i >= index * maxItem - maxItem && i < index * maxItem) {
      shopItems[i].classList.remove("hide");
      shopItems[i].classList.add("show");
    }
    page.innerHTML = index;
  }
}

window.onload = function () {
  showItems();
  check();
};
