let list;

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

function onLoad() {
  list = document.querySelectorAll(".list");
  list.forEach((item) => item.addEventListener("click", activeLink));
}
