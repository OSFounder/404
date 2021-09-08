const content = document.getElementById("content");
const warn = document.getElementById("warning-modal");
const warn_submit = document.getElementById("warn-submit");
const demo = document.getElementById("demo-video");
const mobile_demo = document.getElementById('demo-video-mobile");

warn.classList.remove("hidden-element");

warn_submit.addEventListener("click", e=> {
  document.body.style.background = "#FFFFFF"
  demo.classList.add("hidden-element");
  mobile_demo.classList.add("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
});
