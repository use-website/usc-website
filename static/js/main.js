document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav-list");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.style.display === "flex";
    nav.style.display = isOpen ? "none" : "flex";
    toggle.setAttribute("aria-expanded", !isOpen);
  });
});
