/*--- active label----*/

let parent = document.querySelector(".slide_navigation");
let labelItem = parent.querySelectorAll(".bar");
parent.addEventListener("click", (event) => {
  // Отлавливаем элемент в родители на который мы нажали
  let target = event.target;

  // Проверяем тот ли это элемент который нам нужен
  if (target.classList.contains("bar")) {
    for (let i = 0; i < labelItem.length; i++) {
      // Убираем у других
      labelItem[i].classList.remove("activelabel");
    }
    // Добавляем тому на который нажали
    target.classList.add("activelabel");
  }
});

/*----menu burger------*/
const menuBurgerActive = document.querySelector(".burgermenu");
console.log(menuBurgerActive);
const naveActive = document.querySelector(".header__container");
menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});
