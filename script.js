// JavaScript
const navigation = document.querySelector("nav");
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > header.offsetHeight) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});
