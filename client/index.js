const URL = "http://localhost:8080/products";
const productsList = document.getElementById("productsList");
const addBtn = document.getElementById("add");
const nameNode = document.getElementById("name");
const price = document.getElementById("price");

window.addEventListener("DOMContentLoaded", load);
addBtn.addEventListener("click", addProduct);
function load() {
  axios(URL + "/all").then((res) => {
    console.log(res);

    productsList.innerHTML = "";
    for (const item of res.data) {
      addProductToDom(item);
    }
  });
}
function addProduct() {
  const n = nameNode.value;
  const p = price.value;
  const body = {
    name: n,
    price: p,
  };
  axios.post(`${URL}/add`, body).then((result) => {
    console.log(result);
    addProductToDom(result.data);
  });
}

function removeProduct(id) {
  removeFromDom(id);
  axios.delete(URL + "/delete/" + id).then((result) => {
    console.log(result);
  });
}
function addProductToDom(obj) {
  productsList.innerHTML =
    `<div class="item" id="${obj.id}">
<span class="name">${obj.name}</span>
<span class="price">💲${obj.price}</span>
<button onclick="removeProduct(${obj.id})">❌</button>
</div>` + productsList.innerHTML;
}
function removeFromDom(id) {
  const item = document.getElementById(id);
  productsList.removeChild(item);
}
