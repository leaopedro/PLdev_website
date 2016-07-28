(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var translate = require('./translate.js');
var Loader = require('./loader.js');

// window.onbeforeunload = function(){
// 	window.scrollTo(0,0);
// }

$(document).ready(function () {
  Loader.startLoader();
  placeElements();
});

// EVENTS
$(window).load(function () {
	$('footer').show();
  $('.contact-link').on('click', function () {
		$('html, body').animate({
          scrollTop: ($('#scroll').offset().top - 80)
    }, 1000);
	});
	$('.main-section .fa').on('click', function () {
		$('html, body').animate({
					scrollTop: (window.innerHeight-85)
				}, 800);
	});
	var emailSent = '';
	$('.newsletter-button').on('click', function(){
		$('.message').hide();
		var email = $('.newsletter-input').val().trim();
		var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		// console.log("Email: "+ email, re.test(email));
		if(email && email != '' && email != emailSent && email != null && re.test(email)){
			submitEmail(email, function(data){
				console.log('data: '+data );
				$('.message.success').show();
				$('.newsletter-input').val('');
				emailSent = email;
			}, function(data){
				$('.message.error').show();
			});
		}else{
			$('.message.error').show();
		}
	});
	Loader.stopLoader();
});

$(window).on('scroll', function(){
  if($(window).scrollTop() <= 0){
    $('.navbar').addClass('navbar-transparent');
		$('.navbar-logo').prop('src', '../img/logo4all-branco.png');
  }else{
    $('.navbar').removeClass('navbar-transparent');
		$('.navbar-logo').prop('src', '../img/logo4all-colorido.png');
  }
});

$(window).on('translatedPage', function(){
  eventsAfterTranslate();
});

$(window).on('resize', function(){
  placeElements();
});

// FUNCTIONS
var eventsAfterTranslate = function(){
	$('.main-desc .fa').on('click', function () {
    $('html, body').animate({
          scrollTop: (window.innerHeight-85)
        }, 1000);
  });
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

var placeElements = function(){
  $('.main-section').height(window.innerHeight);
  vertAlign($('.main-title'));
};

var vertAlign = function (element) {
    var fatherHeight = element.parent().height();
    // console.log(fatherHeight, element);
    var top = (fatherHeight-element.height())/2;
    // console.log(top);
    element.css('top', top+'px');
}

},{"./loader.js":3,"./translate.js":5}],2:[function(require,module,exports){
module.exports={
  "mainPageTitle":"4all - Conecting moments",
  "careersPageTitle":"Careers - 4all",
  "aboutPageTitle":"About Us - 4all",
  "whoWeAre":"About Us",
  "workWithUs": "Careers",
  "contactUs":  "Contact us",
  "translatePage": "Versão em português",
  "clientAccess": "Client access",
  "mainTitle": "Life is made of moments,<br /> We want to connect them all.",
  "watchTheVideo": "Watch our video",
  "aboutVideoTitle": "Secure, simple and fast, anywhere, anytime.",
  "aboutVideoSubtitle": "More convenience and security in your payments.",
  "togetherWeAre4all": "We are 4all",
  "comeWithUs": "Be part of our team",
  "bestWayBetween": "We are the best and simplest way to improve your business for your customers.",
  "closeModal": "Close",
  "comeVisitUs": "Visit us",
  "receiveNewsletter": "<i class='fa fa-paper-plane-o'></i>Sign up and receive our news",
  "submit": "Apply now",
  "submitSuccess": "Great! Now you will be updated about 4all news",
  "followUs":"Follow 4all in social medias",
  "buildTogetherTitle":"Let's build your future together.",
  "buildTogetherDesc":"We are looking for dynamic professionals who feel motivated to be part of the assembly of a new business, sharing ideas and enthusiasm, also with an entepreneur profile.<br /><i class='fa fa-angle-down'></i>",
  "loading":"Loading...",
  "weRequire": "We hope you",
  "watch":"Watch",
  "requirements": "<span>Are passionate about technology and software development and want to make something you will be proud of.</span><span>Are clear about the importance of a clean and 'easy to read' code, believing that simpler is better.</span><span>Are open to  adopt the test-driven development as if your job depends on it ... .and this may be exactly the case!</span><span>Feel comfortable working in a team, feel happy to learn and share experience with your colleagues.</span><span>Have a great reading skill in English. You will need to understand technical documentations, specifications, books and tutorials in English.</span><span>Have a college graduation - complete or in progress.</span><span>Have a great desire to learn, collaborate and build.</span>",
  "vertContentTitle":"For each moment, a solution.",
  "submitSuccess":"Great! Now you're gonna be up to date with 4all news.",
  "submitError":"Can't submit now, please try later.",
  "vertTitle1":"4 FOOD",
  "vertDesc1":"Food digital experience anywhere... Anytime.",
  "vertButton":"Learn more",
  "vertTitle2":"4 PARK",
  "vertDesc2":"A new concept for parking services.",
  "vertTitle3":"4 SHOPPING",
  "vertDesc3":"Exclusive advantages for customers.",
  "aboutTitle" : "Transforming the digital world",
  "about": "<span>We are a technology company, focused on changing people's experience in the digital world.</span><span>Our mission is to bring convenience, easiness and security for several moments of your life.</span><span>We are a new concept in digital platform.</span><span>Our platform connects different market segments, allowing people to have access to digital solutions for the different needs of their day-to-day lives.</span><span>We are present in malls, restaurants, universities, events, urban mobility and other segments.</span><span>All of this in a fast, simple and secure way.</span>",
  "aboutChallenges": "Our company is full of challenges! We always have opportunities for technology lovers.",
}

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports={
  "mainPageTitle":"4all - Conectando momentos",
  "careersPageTitle":"Trabalhe conosco - 4all",
  "aboutPageTitle":"Quem somos - 4all",
  "whoWeAre":"Quem somos",
  "workWithUs": "Trabalhe conosco",
  "contactUs":  "Entre em contato",
  "translatePage": "English version",
  "clientAccess": "Acesso cliente",
  "mainTitle": "A vida é feita de momentos. <br /> Vamos conectar todos.",
  "watchTheVideo": "Assista o vídeo explicativo",
  "aboutVideoTitle": "Seguro, simples, rápido e o melhor: em qualquer lugar e em qualquer momento.",
  "aboutVideoSubtitle": "Mais conveniência e segurança em seus pagamentos.",
  "togetherWeAre4all": "Juntos somos 4all",
  "comeWithUs": "Venha fazer parte da nossa equipe",
  "bestWayBetween": "O caminho mais simples entre seu negócio e seus clientes.",
  "closeModal": "Fechar",
  "comeVisitUs": "Venha nos conhecer",
  "receiveNewsletter": "<i class='fa fa-paper-plane-o'></i>Receba nossas novidades por email",
  "submit": "Assinar",
  "followUs":"Siga a 4all nas redes",
  "loading":"Carregando...",
  "buildTogetherTitle":"Venha construir seu futuro aqui.",
  "buildTogetherDesc":"Buscamos profissionais dinâmicos que se sintam motivados a participar da construção de um novo negócio, contribuindo com suas ideias e entusiasmo com perfil empreendedor.<br /><i class='fa fa-angle-down'></i>",
  "weRequire": "Perfil que buscamos",
  "requirements": "<span>Se você quer trabalhar em algo relevante e que gere impacto em seu meio, então este é o lugar para você e para as suas ideias.</span><span>Aqui, todos nós somos apaixonados por tecnologia. Queremos trabalhar com pessoas que façam questão de desenvolver algo de que se orgulharão no futuro, gostem de trabalhar em equipe e sejam abertas a aprender e a compartilhar parte da sua experiência com os colegas.</span><span>Para levar aos usuários da 4all a melhor experiência no mundo digital, nosso time é composto por profissionais criativos, com espírito empreendedor e atentos às tendências de mercado, que atuam de forma multidisciplinar, complementando habilidades e conceitos de diferentes áreas para qualificar as entregas.</span><span>Para fazer parte, é essencial a vontade de aprender, colaborar e construir.</span><span>Gostou da nossa proposta? Então confira as nossas oportunidades e envie o seu currículo para <a href='mailto:querofazerparte@4all.com'>querofazerparte@4all.com</a>.</span>",
  "":"",
  "watch":"Assista",
  "submitSuccess":"Muito bem! Agora você ficará por dentro de todas as novidades da 4all.",
  "submitError":"Não foi possível enviar. Confira seu email e tente novamente.",
  "vertContentTitle":"Para cada momento, uma solução.",
  "vertTitle1":"4 FOOD",
  "vertDesc1":"Experiência food digital em qualquer lugar, a qualquer momento.",
  "vertButton":"Saiba mais",
  "vertTitle2":"4 PARK",
  "vertDesc2":"Um novo conceito associado aos serviços de estacionamento.",
  "vertTitle3":"4 SHOPPING",
  "vertDesc3":"Vantagens exclusivas e direcionadas ao consumidor.",
  "aboutTitle":"Transformando o mundo digital",
  "about": "<span>Somos uma empresa de tecnologia, determinada a transformar a experiência das pessoas no mundo digital.</span><span>Temos como missão levar conveniência, facilidade e segurança aos mais diversos momentos da sua vida.</span><span>Somos um novo conceito em plataforma digital.</span><span>Nossa plataforma conecta diferentes segmentos do mercado, permitindo que as pessoas tenham acesso a soluções digitais para diferentes necessidades do seu cotidiano.</span><span>Estamos presentes em shoppings, restaurantes, universidades, eventos, mobilidade urbana e outros momentos.</span><span>Tudo isso de forma rápida, simples e segura.</span>",
  "aboutChallenges": "Nossa empresa está cheia de desafios! Sempre temos espaço para quem é apaixonado por tecnologia e por desenvolvimento de software.",

}

},{}],5:[function(require,module,exports){
var ptBr = require('./pt-br.json');
var en = require('./en.json');

var translatePage = function(lang){
  // console.log('chamou');
  if(lang.toLowerCase() =='pt-br'){
    lang = ptBr;
  }else if(lang.toLowerCase().indexOf('en') != -1){
    lang = en;
  }else{
    console.log('auto');
    lang = ptBr;
  }

  $('[data-translate]').each(function(){
    var key = $(this).data('translate');
    if(lang[key]){
      $(this).html(lang[key]);
    }else{
      console.log('"'+key+'":"",');
    }
  });
}

module.exports = translatePage;

},{"./en.json":2,"./pt-br.json":4}]},{},[1]);
