/*--- active label----*/

let parent = document.querySelector(".slide_navigation");
let labelItem = parent.querySelectorAll(".bar");
parent.addEventListener("click", (event) => {
  let target = event.target;

  if (event.target.classList.contains("bar")) {
    for (let i = 0; i < labelItem.length; i++) {
      labelItem[i].classList.remove("activelabel");
    }

    event.target.classList.add("activelabel");
  }
});

/*----menu burger------*/
const menuBurgerActive = document.querySelector(".burgermenu");

const naveActive = document.querySelector(".header__menu");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  naveActive.classList.toggle("active");
});

naveActive.addEventListener("click", function (event) {
  if (event.target.closest(".header__menu--item") && window.innerWidth < 768) {
    menuBurgerActive.classList.remove("active");
    naveActive.classList.remove("active");
  }
});
