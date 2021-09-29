const content = document.getElementById("content");
const demo = document.getElementById("demo-video");
const mobile_demo = document.getElementById("demo-video-mobile");
const navbar = document.getElementById("navigation-bar");
const footer = document.getElementById("foot-content");
const bottom_warn = document.getElementById("bottom-warn");
const bottom_warn_submit = document.getElementById("bottom-warn-submit");
const close_bottom_warn = document.getElementById("close-bottom-warn");
const load = document.getElementById("load-screen");

function sleep(ms)
{
    return(new Promise(function(resolve, reject) {
        setTimeout(function() { resolve(); }, ms);
    }));
}

content.classList.add("hidden-element");
load.classList.remove("hidden-element");

window.addEventListener('DOMContentLoaded', (event) => {
   	load.classList.add("hidden-element");
  	content.classList.remove("hidden-element");
});

function disable_content() {
  window.sessionStorage.setItem('warning-consent', 'false');
  navbar.classList.add("navbar-full");
  navbar.classList.remove("navbar-empty");
  demo.classList.add("hidden-element");
  mobile_demo.classList.add("hidden-element");
}

function allow_content() {
  window.sessionStorage.setItem('warning-consent', 'true');
  navbar.classList.remove("navbar-full");
  navbar.classList.add("navbar-empty");
  demo.classList.remove("hidden-element");
  mobile_demo.classList.remove("hidden-element");
}

function remove_bottom_warn() {
  bottom_warn.classList.add("hidden-element");
}

function logo_error() {
    document.getElementById("logo-img").classList.add("hidden-element");
    document.getElementById("logo-replace").classList.remove("hidden-element");
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
  console.error("Query Failed");
}


$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
			
		 if (currentScroll <= 20) {
			if (currentScroll > previousScroll) {
				hideFoot();
			} else {
				showFoot();
			}
			previousScroll = currentScroll;
		}
	});

	function hideFoot() {
		$("foot-content").addClass("hidden-element");
	}

	function showFoot() {
		$("foot-content").removeClass("hidden-element");
	}
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
 
      if (objectBottom < windowBottom) { 
        // navbar goes to blue background
	if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } 
	else if (objectBottom > windowBottom) {
		if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
	}
	else {
        // navbar goes to transparent background
	if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});






