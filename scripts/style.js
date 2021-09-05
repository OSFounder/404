$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
			
		 if (currentScroll > 0 && currentScroll < 400) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else {
				showNav();
			}
			previousScroll = currentScroll;
		}
		if(window.scrollY<=200){
			showNav();
}
	});

	function hideNav() {
		$("#top-bar").removeClass("is-visible").addClass("is-hidden");
	}

	function showNav() {
		$("#top-bar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
	}
});

function plan_one() {
	$(document).ready(function () {
    target_offset = $('#p1').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 2000);
});
}

function plan_two() {
	$(document).ready(function () {
    target_offset = $('#p3').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 2000);
});
}

function plan_three() {
	$(document).ready(function () {
    target_offset = $('#p5').offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 2000);
});
}


$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
 
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else {
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
});

var login_modal = document.getElementById("login-modal");
var modal_content = document.getElementById("modal-content");

function modal_open() {
	login_modal.style.display = "block";
	modal_content.style.opacity = 1;
}

function modal_close() {
	login_modal.style.display = "none";
	modal_content.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == login_modal) {
        login_modal.style.display = "none";
	modal_content.style.opacity = 0;
  }
}



