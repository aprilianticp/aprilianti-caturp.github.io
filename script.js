// Membuat variabel untuk menyimpan elemen HTML
var header = document.querySelector("header");
var navLinks = document.querySelectorAll("header nav a");
var sections = document.querySelectorAll("main section");

// Menambahkan class active pada link yang sedang dikunjungi
navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Menghapus class active pada semua link
    navLinks.forEach(function(navLink) {
      navLink.classList.remove("active");
    });

    // Menambahkan class active pada link yang sedang diklik
    link.classList.add("active");

    // Mendapatkan seksi yang sesuai dengan link yang diklik
    var sectionId = link.getAttribute("href");
    var section = document.querySelector(sectionId);

    // Menampilkan seksi yang sesuai
    sections.forEach(function(section) {
      section.style.display = "none";
    });
    section.style.display = "block";
  });
});

// Menambahkan efek scroll pada header
window.addEventListener("scroll", function() {
  var scrollPos = window.scrollY;
  if (scrollPos > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
