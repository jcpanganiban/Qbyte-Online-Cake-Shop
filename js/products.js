let purchased = [];
let products = document.querySelectorAll(".product-name");
let product = Array.from(products);
let cart = document.querySelector(".lowercart");
var a = document.getElementsByClassName("product-name");
console.log(a[1].innerText);

console.log(product);

function addToCart(val) {
  purchased.push(a[val].innerText);
  cart.innerText = purchased.join("\n");
}
