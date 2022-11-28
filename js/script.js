/*--- active label----*/

let labelItem = document.querySelectorAll(".bar");

for (const item of labelItem) {
  item.addEventListener("click", function () {
    for (const el of labelItem) {
      el.classList.remove("activelabel");
    }
    this.classList.add("activelabel");
  });
}

/*----menu burger------*/
const menuBurgerActive = document.querySelector(".burgermenu");
const naveActive = document.querySelector(".header__menu");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});

naveActive.addEventListener("click", function (event) {
  if (event.target.closest(".header__menu") && window.innerWidth < 768) {
    menuBurgerActive.classList.remove("active");
    naveActive.classList.remove("active");
  }
});
