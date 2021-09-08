const content = document.getElementById("content");
const warn = document.getElementById("warning-modal");
const warn_submit = document.getElementById("warn-submit");
const warn_exit = document.getElementById("exit-warn");
const demo = document.getElementById("demo-video");
const mobile_demo = document.getElementById("demo-video-mobile");
const navbar = document.getElementById("navigation-bar");

function disable_content() {
  window.sessionStorage.setItem('warning-consent', 'false');
  navbar.classList.add("navbar-full");
  navbar.classList.remove("navbar-empty");
  document.body.style.background = "#FFFFFF";
  demo.classList.add("hidden-element");
  mobile_demo.classList.add("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
}

function allow_content() {
  window.sessionStorage.setItem('warning-consent', 'true');
  navbar.classList.remove("navbar-full");
  navbar.classList.add("navbar-empty");
  document.body.style.background = "#FFFFFF";
  demo.classList.remove("hidden-element");
  mobile_demo.classList.remove("hidden-element");
  warn.classList.add("hidden-element");
  content.classList.remove("hidden-element");
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
    warn.classList.remove("hidden-element");
    warn_submit.addEventListener("click", e=> {
      disable_content();
    });

    warn_exit.addEventListener("click", e=> {
      allow_content();
    });
  }
    
}
catch {
warn.classList.remove("hidden-element");

warn_submit.addEventListener("click", e=> {
  disable_content();
});

warn_exit.addEventListener("click", e=> {
  allow_content();
});
}

const detect_down = $('#scroll-detect');

function to_left_nav() {
    document.getElementById("navigation-bar").style[background-position] = "left";
}

$(window).scroll(function(){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
        to_left_nav();
    }
});
