const content = document.getElementById("content");
const warn = document.getElementById("warning-modal");
const warn_submit = document.getElementById("warn-submit");
const warn_exit = document.getElementById("exit-warn");
const demo = document.getElementById("demo-video");
const mobile_demo = document.getElementById("demo-video-mobile");
const navbar = document.getElementById("navigation-bar");

warn.classList.remove("hidden-element");

warn_submit.addEventListener("click", e=> {
  navbar.classList.add("navbar-full");
  navbar.classList.remove("navbar-empty");
  document.body.style.background = "#FFFFFF";
  demo.classList.add("hidden-element");
  mobile_demo.classList.add("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
});

warn_exit.addEventListener("click", e=> {
  navbar.classList.remove("navbar-full");
  navbar.classList.add("navbar-empty");
  document.body.style.background = "#FFFFFF";
  demo.classList.remove("hidden-element");
  mobile_demo.classList.remove("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
});

