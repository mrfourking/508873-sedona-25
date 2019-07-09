var searchForm = document.querySelector(".search-form"),
  searchButton = document.querySelector(".search-button");


searchForm.classList.add("form-disable");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-show");
});

