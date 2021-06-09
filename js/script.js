"use strict";

// window.onload = function()
{
  const cart_btns = document.querySelectorAll(".js_cart_btn");
  const cart_cnt_icon = document.getElementById("js_cart_cnt");
  let cart_cnt = 0;
  const clicked = [];
  const save_items = [];
  let items = JSON.parse(localStorage.getItem("items"));

    // すでにカートに商品が入っている場合、カートアイコンのカウント表示とカートボタンをアクティブにする
  if(items) {
    let id;
    for (let i = 0; i < items.length; i++){
      id = items[i].id;
      save_items.push(items[i]);
      clicked.push(id);
      activate_btn(id);
    }

    if(items.length != 0) {
      cart_cnt_icon.parentNode.classList.remove("hidden");
      cart_cnt_icon.textContent = cart_cnt;
    }
  }

  // カートボタンを押した際の処理
  cart_btns.forEach((cart_btn, index) => {
    cart_btn.addEventListener("click", () => {
      if (clicked.indexOf(index) >= 0) {
        for (let i = 0; i < clicked.length; i++) {
          if (clicked[i] == index) {
            clicked.splice(i, 1);
            save_items.splice(i, 1);
          }
        }
        inactivate_btn(index);

      } else {
        const name = cart_btn.dataset.name;
        const price = Number(cart_btn.dataset.price);

        clicked.push(index);
        save_items.push({
          id: index,
          name: name,
          price: price,
        });

        activate_btn(index);

      }
        localStorage.setItem("items", JSON.stringify(save_items));
    });
  });

    function activate_btn(index) {
      cart_cnt++;
      if (cart_cnt >= 1) {
        cart_cnt_icon.parentNode.classList.remove("hidden");
      }
      cart_cnt_icon.textContent = cart_cnt;
      cart_btns[index].classList.add("item_cart_btn_active");
    };

    function inactivate_btn (index) {
      cart_cnt--;
      if (cart_cnt == 0) {
        cart_cnt_icon.parentNode.classList.add("hidden");
      }
      cart_cnt_icon.textContent = cart_cnt;
      cart_btns[index].classList.remove("item_cart_btn_active");

    }

}
