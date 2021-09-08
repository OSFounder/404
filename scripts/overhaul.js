const content = document.getElementById("content");
const warn = document.getElementById("warning-modal");
const warn_submit = document.getElementById("warn-submit");
const demo = document.getElementById("demo-video");

warn.classList.remove("hidden-element");

warn_submit.addEventListener("click", e=> {
  demo.classList.add("hidden-element");
  warn.classList.add("hidden-element");
  document.body.style.background = "#FFFFFF"
  content.classList.remove("hidden-element");
});
