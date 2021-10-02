const search_form__button = document.querySelector(".main--orders > h3");
const search_form = document.querySelector(".search--form");

search_form__button.addEventListener("click", function () {
  search_form.classList.toggle("search--form__show");
});
