/**
 * Created by PEDRO on 13/06/2015.
 */
//(function($){
$(document).ready(function () {
    var $root = $('html, body');

    if (window.location.protocol == "http:") {
        var restOfUrl = window.location.href.substr(5);
        window.location.replace("https:" + restOfUrl);
    }

    $("#overlay").removeClass("hidden");

    $('.home').height(window.innerHeight);

    $('.main-call').css('margin-top', (window.innerHeight*0.5));

    columnChart();


    var iOS = ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ? true : false );
    if(iOS){
        $('.home, .between-one, .between-two, .between-three').css('background-attachment', 'scroll');
    }

    generateImages();

    var navbar = $('.navbar');
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            navbar.addClass("nav-transparent");
        } else {
            navbar.removeClass("nav-transparent");
        }
    });

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
        $('#snapchat-modal').modal();
    });

});
$(window).load(function () {
  $("#overlay").addClass("hidden");
});
//});

var generateImages = function () {
  generateImagesArray(function(arrays){
    var homeImg = getRandomImages(arrays.homes, 1)[0];
    var betweensImgs = getRandomImages(arrays.bgs, 3);
    // console.log(betweensImgs);
    $('.home').css('background-image', "url('"+homeImg+"')");
    $('.between-one').css('background-image', "url('"+betweensImgs[0]+"')");
    $('.between-two').css('background-image', "url('"+betweensImgs[1]+"')");
    $('.between-three').css('background-image', "url('"+betweensImgs[2]+"')");
  });
}

function generateImagesArray(cb){
  <!-- fundo alternado -->
  var homes = [];
  var bgs = [];
  for(var i = 1; i<19; i++){
    if(i<14){
      bgs[i] = "img/bg"+i+".jpg";
    }
    homes[i] = "img/home"+i+".jpg";
  }

  cb({
    homes: homes,
    bgs: bgs
  });
}

var getRandomNum = function (length, lastNum) {
  var randnum = Math.random();
  var rand = Math.round(randnum * (length - 1)) + 1;
  if(lastNum && lastNum.length != 0 && lastNum.indexOf(rand) != -1){
    return getRandomNum(length, lastNum);
  }else{
    return rand;
  }
}

var getRandomImages = function(array, value){
  var images = [];
  var lastNum = [];
  for(var i=0; i<value; i++){
    var rand = getRandomNum(array.length-1, lastNum);
    console.log(rand, array[rand]);
    lastNum.push(rand);
    images.push(array[rand]);
  }
  return images;
}

function columnChart(){
    var item = $('.chart', '.column-chart').find('.item'),
    itemWidth = 100 / item.length;
    item.css('width', itemWidth + '%');

    $('.column-chart').find('.item-progress').each(function(){
        var itemProgress = $(this),
        itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
        itemProgress.css('height', itemProgressHeight);
    });
};

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
