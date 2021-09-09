const content = document.getElementById("content");
const warn = document.getElementById("warning-modal");
const warn_submit = document.getElementById("warn-submit");
const warn_exit = document.getElementById("exit-warn");
const demo = document.getElementById("demo-video");
const mobile_demo = document.getElementById("demo-video-mobile");
const navbar = document.getElementById("navigation-bar");
const footer = document.getElementById("foot-content");
const bottom_warn = document.getElementById("bottom-warn");
const bottom_warn_submit = document.getElementById("bottom-warn");
const close_bottom_warn = document.getElementById("close-bottom-warn");

function disable_content() {
  window.sessionStorage.setItem('warning-consent', 'false');
  navbar.classList.add("navbar-full");
  navbar.classList.remove("navbar-empty");
  footer.classList.remove("hidden-element");
  document.body.style.background = "#FFFFFF";
  demo.classList.add("hidden-element");
  mobile_demo.classList.add("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
}

function allow_content() {
  window.sessionStorage.setItem('warning-consent', 'true');
  footer.classList.remove("hidden-element");
  navbar.classList.remove("navbar-full");
  navbar.classList.add("navbar-empty");
  document.body.style.background = "#FFFFFF";
  demo.classList.remove("hidden-element");
  mobile_demo.classList.remove("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
}

function remove_bottom_warn() {
  bottom_warn.classList.add("hidden-element");
  warn.classList.add("hidden-element");
}

function sleep(ms)
{
    return(new Promise(function(resolve, reject) {
        setTimeout(function() { resolve(); }, ms);
    }));
}

try {
  const warn_consent = window.sessionStorage.getItem("warning-consent");
  if (warn_consent == "false") {
    disable_content();
  }
  else if (warn_consent == "true") {
    allow_content();
  }
  else {
    console.error("could not find consent");
    bottom_warn.classList.remove("hidden-element");
    bottom_warn_submit.addEventListener("click", e=> {
      remove_bottom_warn();
      disable_content();
    });
    
    close_bottom_warn.addEventListener("click", e=> {
      remove_bottom_warn();
    });
  
    sleep(60000).then(function () {
      remove_bottom_warn();
    });
  }
}
    
catch {
  console.log("Query Failed");
}




