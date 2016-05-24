/**
 * Created by PEDRO on 13/06/2015.
 */
//(function($){
    $(document).ready(function () {

        $("#overlay").removeClass("hidden");

        var $root = $('html, body');

        var iOS = ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ? true : false );
        if(iOS){
            $('<link rel="stylesheet" type="text/css" href="appleStyle.css" />').appendTo('head');
        }

        <!-- fundo alternado -->

        var images = [];
        images[1] = "img/home1.jpg";
        images[2] = "img/home2.jpg";
        images[3] = "img/home3.jpg";
        images[4] = "img/home4.jpg";
        images[5] = "img/home5.jpg";
        images[6] = "img/home6.jpg";
        images[7] = "img/home7.jpg";
        images[8] = "img/home8.jpg";
        images[9] = "img/home9.jpg";

        var randnum = Math.random();



        var rand1 = Math.round(randnum * (images.length - 1)) + 1;

        //console.log(randnum, "*", images.length-1 ," = ", rand1, images[rand1]);

        var image = images[rand1];

        $(".home").css("background-image", "url('" + image + "')");

        function detectmob() {
            if( navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
            ){
                return true;
            }
            else {
                return false;
            }
        }
        var navbar = $('.navbar');
        if(!detectmob()) {
            $(window).scroll(function () {
                if ($(window).scrollTop() == 0) {
                    navbar.addClass("nav-transparent");
                } else {
                    navbar.removeClass("nav-transparent");
                }
            });
        }else{
            navbar.removeClass("nav-transparent");
            $root.removeAttr("data-spy");
        }

        $(".carousel").owlCarousel();
        $(".carousel-full").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem: true,
            arrows: true
        });

        $('.scroll').click(function() {
            $root.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 900);
            return false;
        });

        $('.navbar-toggle').click(function() {
            if ($(window).scrollTop() == 0 && $('.navbar-toggle').hasClass('collapsed')) {
                navbar.removeClass("nav-transparent");
            }else if($(window).scrollTop() == 0 && !$('.navbar-toggle').hasClass('collapsed')){
                navbar.addClass("nav-transparent");
            }else{
                navbar.removeClass("nav-transparent");
            }


            if ($(window).scrollTop() == 0) {
                navbar.removeClass("nav-transparent");
            }

        });

        //$('.navbar-collapse.collapse.in').click(function() {
        //
        //});

        $('.linkedin').click(function() {
            window.open('https://br.linkedin.com/in/leaopedro','_blank');
        });
        $('.twitter').click(function() {
            window.open('https://twitter.com/PdrLeao','_blank');
        });
        $('.facebook').click(function() {
            window.open('https://www.facebook.com/leaop54','_blank');
        });
        $('.email').click(function() {
            window.open('https://www.facebook.com/leaop54','_blank');
        });
        $('.github').click(function() {
            window.open('https://github.com/leaopedro','_blank');
        });
        $('.gplus').click(function() {
            window.open('https://plus.google.com/112553782786419197102','_blank');
        });
        $('.whatsapp').click(function() {
            window.open('tel:+555198007110','_blank');
        });
        $('.snapchat').click(function() {
            console.log('clicou')
            $('#snapchat-modal').modal();
        });

    });
    $(window).load(function () {
        $("#overlay").addClass("hidden");
    });
//});



//(function($){$(document).ready(function(){$('.faq dt').click(function(){jqThis=$(this);jqThis.toggleClass('opened');jqThis.next('dd').toggleClass('hidden');});$('header a[href*=#], .faq a[href*=#]').click(function(){var topCount=($($.attr(this,'href')).offset().top)-70;$('html, body').animate({scrollTop:topCount},500);return false;});$(window).scroll(function(){var scroll_top=$(window).scrollTop();var speed=0.75;var fade=0.5;var move_value=Math.round(scroll_top*speed);var fade_value=100-(Math.round(scroll_top*fade));$('.overall .hero').css('background-position','center '+move_value+'px');$('.overall .hero .container').css('opacity',fade_value/100);});});})(jQuery);

//$(document).ready( function(){
//    $("#img-load-up").slideUp(1500, function() {
//        //$("#img-load-up").addClass("hidden");
//    });
//    $("#img-load-down").slideDown(1500, function() {
//        //$("#img-load-down").addClass("hidden");
//    });
//});

//$('#go-down').hover(
//    function(){ $(this).removeClass('bounceInDown') },
//    function(){ $(this).addClass('flash') }
//);