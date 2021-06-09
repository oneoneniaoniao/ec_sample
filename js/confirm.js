"use strict";

window.onload = function () {
  const items = JSON.parse(localStorage.getItem("items"));
  const ele = document.getElementById("js_shopping_list");
  const fragment = document.createDocumentFragment();
  let total = 0;
  const total_ele = document.getElementById("js_total");
  const confirm_btn = document.getElementById("js_confirm");
  const container = document.getElementsByClassName("container")[0];

  container.classList.remove("done");
  if (items) {
    for (let i = 0; i < items.length; i++) {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const price = document.createElement("div");

      price.classList.add("price");

      h2.appendChild(document.createTextNode(items[i].name));
      price.appendChild(document.createTextNode(items[i].price));

      li.appendChild(h2);
      h2.appendChild(price);
      fragment.appendChild(li);

      total = total + items[i].price;
    }
  }

  ele.appendChild(fragment);

  total_ele.textContent = total;

  confirm_btn.addEventListener("click",()=> {
    container.classList.add("done");
    confirm_btn.classList.add("done");
    confirm_btn.textContent = "ご購入済み"
    window.alert("購入が確定しました。");
    localStorage.removeItem("items");

  });
};


