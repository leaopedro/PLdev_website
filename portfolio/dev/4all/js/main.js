(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Loader = function () {

}

Loader.startLoader = function () {
	centerAbsElement($('.loader'));
	$('body').on('scroll touchmove mousewheel', function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  return false;
	});
	$('.loader-section').show(function(){
			$('.loader').fadeIn(200);
	});
}

Loader.stopLoader = function () {
	$('.loader').fadeOut(400, function(){
		$('.loader-section').fadeOut(200, function(){
			$('body').off('scroll touchmove mousewheel');
		});
	});

}

var centerAbsElement = function(element, extraTop, extraLeft){
  var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth-17;

  var elHeight = element.height();
  var elWidth = element.width();

  var marginY = (screenHeight-elHeight)/2;
  var marginX = (screenWidth-elWidth)/2;

  if(extraTop){
    marginY += extraTop;
  }
  if(extraLeft){
    marginX += extraLeft;
  }
  // console.log(element, 'screenWidth: '+ screenWidth, 'elWidth: '+ elWidth, 'marginX: ' +marginX );
  element.css('top', marginY+'px');
  element.css('left', marginX+'px');
}

module.exports = Loader;

},{}],2:[function(require,module,exports){
"use strict";

var Loader = require('./loader.js');

window.onbeforeunload = function(){
	window.scrollTo(0,0);
};
var player;
window.onYouTubeIframeAPIReady = function() {
	// console.log('|OnReady');
  player = new YT.Player('main-video', {
    height: '500',
    videoId: 'Bcl5CafLofc',
		playerVars: {'fs': 0, 'showinfo': 0},
		events: {
		 'onStateChange': onPlayerStateChange
	 },
  });
	// console.log(player);
}
$(document).ready(function(){
	var screenWidth = window.innerWidth;
	Loader.startLoader();
	$('section').removeClass('hidden');
	var fpOptions = {
		controlArrows: true,
		scrollingSpeed: 950,
		scrollBar: true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			// $('#main-verticals-animation').addClass('slide-animating', function(){
			// 	$('#main-verticals-animation').prop('src', 'img/logo4all-parking-branco.png');
			// 	$('#main-verticals-animation').removeClass('slide-animating').addClass('slide-animated');
			// });
			if(nextSlideIndex === 0){
				$('#main-verticals-animation').prop('src', 'img/logo4all-gastronomia-branco.png');
			}else if(nextSlideIndex === 1){
				$('#main-verticals-animation').prop('src', 'img/logo4all-parking-branco.png');
			}else if(nextSlideIndex === 2){
				$('#main-verticals-animation').prop('src', 'img/logo4all-shopping-branco.png');
			}
		},
		onLeave: function(index, nextIndex, direction){
			if(index==1 ){
				if(screenWidth > 450){
					$('.navbar').removeClass('navbar-transparent');
				}
				if(nextIndex == 2){
					doAnimation();
				}''
			}else if (index==2 && nextIndex == 1){
				reverseAnimation();
				if(screenWidth > 450){
					$('.navbar').addClass('navbar-transparent');
				}
			}
			if (index != 2 && index != 1){
				$('#main-verticals-animation, #main-logo').hide();
			}
		}
	}
	if(screenWidth > 500){
		// não é mobile
		fpOptions.fitToSection = false;
		if(screenWidth > 768){
			fpOptions.slidesNavigation = true;
		}
	}else{
		// é mobile
		fpOptions.slidesNavigation = false;
		fpOptions.fitToSection = false;
	}
	$('#fullpage').fullpage(fpOptions);

	$('.btn-video').on('click', function(){
		openPlayer();
	});
	$('.close-main-video').on('click', function(){
		closePlayer();
	});
	$('.watch-video-container').on('click', function(){
		$('#video-modal').modal();
	});
	$('.section-1 .fa').on('click', function(){
		if(player.isOpen){
			closePlayer(100, function(){
				$.fn.fullpage.moveSectionDown();
			});
		}else{
			$.fn.fullpage.moveSectionDown();
		}
	});
	$('#video-modal').on('hidden.bs.modal', function (e) {
    $("#video-modal iframe").attr("src", $("#video-modal iframe").attr("src"));
	});
	$('.contact-link').on('click', function(){
		if(player.isOpen){
			closePlayer(100, function(){
				$.fn.fullpage.moveTo(6);
		    cancelAnimation();
			});
		}else{
			$.fn.fullpage.moveTo(6);
	    cancelAnimation();
		}
  });
	// $('.email-button').on('click', function(){
	// 	window.open('mailto:contato@4all.com', '_blank');
	// });
	var emailSent = [];
	$('.newsletter-button').on('click', function(){
		$('.message').hide();
		var email = $('.newsletter-input').val().trim();
		var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		// console.log("Email: "+ email, re.test(email));
		if(email && email != '' && emailSent.indexOf(email) === -1 && email != null && re.test(email)){
			submitEmail(email, function(data){
				console.log('data: '+data );
				$('.message.success').show();
				$('.newsletter-input').val('');
				emailSent.push(email);
			}, function(data){
				$('.message.error').show();
			});
		}else{
			$('.message.error').show();
		}
	});
});
function openPlayer(speed){
	// if(window.innerHeight < 620){
	// 	$('.fa.fa-angle-down').fadeIn();
	// }
	if(speed){
		$('.main-video-section').fadeIn(speed);
	}else{
		$('.main-video-section').fadeIn();
	}
	$('body').css('overflow', 'hidden');
	$.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);
	player.isOpen = true;
	player.playVideo();
}
function closePlayer(speed, cb){
	player.isOpen = false;
	player.stopVideo();
	// if(window.innerHeight < 620){
	// 	$('.fa.fa-angle-down').hide();
	// }
	if(speed){
		$('.main-video-section').fadeOut(speed);
	}else{
		$('.main-video-section').fadeOut();
	}
	$('body').css('overflow', 'auto');
	$.fn.fullpage.setMouseWheelScrolling(true);
	$.fn.fullpage.setAllowScrolling(true);
	if(cb){
		cb();
	}
}
function onPlayerStateChange(event) {
    if(event.data === 0) {
        closePlayer();
    }
}

$(window).load(function () {

	placeElements(function(){
		Loader.stopLoader();
		// console.log('placeou');
		lazyfuncs();
	});
});

$(window).on('resize', function(){
	placeElements();
});

var cancelAnimation = function(){
  $('#main-verticals-animation').hide();
  $('.verticals-logo').show();
  $('#main-logo').css('position', 'absolute').removeClass('slow-spin').show();
};

var submitEmail = function(email, successFunc, errorFunc){
	$.ajax({
	  url: "http://dev.4all.mobi:3018/newsletter/add",
		type : 'POST',
		dataType:'json',
		data : {
	    'email' : email,
			"token":"b34lhsdfJS*$%"
	  },
		success : function(data) {
        successFunc(data);
    },
		error: function (data) {
			errorFunc(data);
		}
	});
}

var reverseAnimation = function () {
	// $('#main-verticals-animation').removeClass('animated-in').addClass('animating-out');
	// $('.slide.active').find('.verticals-logo').hide();
	// $('#main-logo').removeClass('animated-out').addClass('animating-in');
	// setTimeout(function(){
	// 	$('#main-verticals-animation').removeClass('animating-out').addClass('animated-out');
	// 	$('#main-verticals-animation').removeClass('animating-in').addClass('animated-in');
	// 	$('.verticals-logo').hide();
	// }, 950);
		$('#main-logo, .verticals-logo').hide();
		$('#main-verticals-animation').show();
		$('#main-logo, #main-verticals-animation').css('position', 'fixed');
		$('#main-verticals-animation').fadeOut(1000).addClass('slow-spin');
		$('#main-logo').fadeIn(1000);
		rotate($('#main-logo'), 180, 360, 1000, function(){
			$('#main-verticals-animation').hide().removeClass('slow-spin');
		});
}

var doAnimation = function () {
	// $('#main-logo').removeClass('animated-in').addClass('animating-out');
	// $('#main-verticals-animation').removeClass('animated-out').addClass('animating-in');
	// setTimeout(function(){
	// 	console.log('Chamoustes')
	// 	$('#main-logo').removeClass('animating-out').addClass('animated-out');
	// 	$('#main-verticals-animation').removeClass('animating-in').addClass('animated-in');
	// 	$('.verticals-logo').show();
	// }, 950);

	$('#main-logo').fadeOut(1000).addClass('slow-spin');
	$('#main-verticals-animation').fadeIn(1000);
	rotate($('#main-verticals-animation'), 180, 360, 1000, function(){
		$('#main-verticals-animation').hide();
		$('.verticals-logo').show();
		$('#main-logo').css('position', 'absolute').removeClass('slow-spin').show();
	});
}

var placeElements = function (cb) {
	var screenHeight = window.innerHeight;
  var screenWidth = window.innerWidth;

	// centerAbsElement($('.loader'));
	centerAbsElement($('.under-logo'), 132, 2);
	centerAbsElement($('#main-logo'));
	centerAbsElement($('#main-verticals-animation'));
	centerAbsElement($('#main-vert-circle'));
	centerAbsElement($('.section-1 .fa'), '#', 0);

	if(screenWidth < 768){
		centerAbsElement($('.vert-hand-food'), '#', 29);
		centerAbsElement($('.vert-hand-park'), '#', 60);
		centerAbsElement($('.vert-hand-shop'), '#', 7.5);

	}else{
		centerAbsElement($('.vert-hand-food'), '#', 43);
		centerAbsElement($('.vert-hand-park'), '#', 84);
		centerAbsElement($('.vert-hand-shop'), '#', 5);
		// if(screenWidth > 920){
		if(screenWidth < 920){
			centerAbsElement($('.vert-about-desktop-1'), 0, -13);
		}else{
			if(screenWidth > 1800){
				centerAbsElement($('.vert-hand-park'), '#', 107);
			}
			centerAbsElement($('.vert-about-desktop-1'));
		}
		centerElementOnSlider($(".vert-about-desktop-2"), 2);
		centerElementOnSlider($(".vert-about-desktop-3"), 3);
		// }
	}
		centerElementOnSlider($(".vert-circle-2"), 2);
		centerElementOnSlider($(".vert-circle-3"), 3);
	if(cb){
		cb();
	}
}

var lazyfuncs = function(){
		initSlider();
		initMap();
		var screenHeight = window.innerHeight;
		// if (screenHeight < 500){
		// 	$('footer').css('height', '30px');
		// }else if (screenHeight < 600){
		// 	$('footer').css('height', '60px');
		// }
}

var initSlider = function(){
	var container = $('.backgrounds-container');
	var children = $('.backgrounds-container > div');
	children.each(function(div){
		// console.log('Aplicou CSS', div, $(this));
		$(this).css('background-image', "url('./img/together"+(div+1)+".JPG'");
	});
	// console.log('Vai changear');
	setInterval(function(){changeImage()}, 5000);
};
var currentDiv = 0;
var changeImage = function(){
	// console.log('Changeou');
	var divs = $('.backgrounds-container > div');
	var active = $('.backgrounds-container > div.active')[0];
	$(active).removeClass('active');
	if($(active).hasClass('7')){
		currentDiv = 0;
		$(divs[currentDiv]).addClass('active');
		return;
	}else{
		currentDiv += 1;
		$(divs[currentDiv]).addClass('active');
		return;
	}
};

var initMap = function () {
	// console.log(window.innerHeight ,window.innerHeight*0.8, window.innerHeight*0.2);
	$('.map').height(window.innerHeight*0.75);
	// $('.phrase-section').height(window.innerHeight*0.2);
	var mapSec = $('.map')[0];
	var adress4all = new google.maps.LatLng(-30.0275162, -51.1826715);
  var map = new google.maps.Map(mapSec, {
		center:  adress4all,
		zoom: 17,
		keyboardShortcuts: false,
		scrollwheel: false,
		draggable: false
	});
	var markerImg = 'img/map-icon.png';
  var marker = new google.maps.Marker({
    position: adress4all,
    map: map,
    icon: markerImg
  });
	setTimeout(function(){
		if(!$('.gm-style').length > 0){
			$('.map').css('background-image', "url('./img/map.png')");
		}
	}, 2000);
}

var rotate = function(element, from, to, time, cb){
  var initialCss = {
    '-ms-transform': 'rotate('+from+'deg)',
    '-webkit-transform': 'rotate('+from+'deg)',
    'transform': 'rotate('+from+'deg)',
  }
  element.css(initialCss);

  $({deg: from}).animate({deg: to}, {
        duration: time,
        step: function(now) {
            element.css({
              '-ms-transform': 'rotate(' + now + 'deg)',
              '-webkit-transform': 'rotate(' + now + 'deg)',
              transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: cb
    });
}

var centerElementOnSlider = function (element, slideNum) {
	var screenHeight = window.innerHeight;
	var screenWidth = $('body').innerWidth();

	var elHeight = element.height();
	var elWidth = element.width();

	var marginY = (screenHeight-elHeight)/2;
  var marginX = (screenWidth*(slideNum-1))+((screenWidth-elWidth)/2);
	// console.log(marginX, screenWidth, elWidth);

	element.css('left', marginX+'px');
	element.css('top', marginY+'px');
};

var centerAbsElement = function(element, extraTop, extraLeft){
  var screenHeight = window.innerHeight;
  var screenWidth = $('body').innerWidth();

  var elHeight = element.height();
  var elWidth = element.width();

  var marginY = (screenHeight-elHeight)/2;
  var marginX = (screenWidth-elWidth)/2;

	// console.log('el:', element, element.height(), 'top: ',marginY );
  // console.log(element, 'screenWidth: '+ screenWidth, 'elWidth: '+ elWidth, 'marginX: ' +marginX );

  if(extraTop){
		if(extraTop === "#"){
			if(extraLeft){
				marginX += extraLeft;
			}
			element.css('left', marginX+'px');
			return;
		}else{
			marginY += extraTop;
		}
  }
  if(extraLeft){
		if(extraLeft === "#"){
			if(extraTop){
				marginY += extraTop;
			}
			element.css('top', marginY+'px');
			return;
		}else{
			marginX += extraLeft;
		}
  }
	// console.log('top: ', marginY);

  element.css('top', marginY+'px');
  element.css('left', marginX+'px');
}

},{"./loader.js":1}]},{},[2]);
