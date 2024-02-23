$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. slick carousel
3. welcome animation support
4. feather icon
5. counter
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. slick carousel

	    $(".testimonial-carousel").slick({
	        infinite: true,
	        centerMode: true,
	        autoplay:true,
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        autoplaySpeed:1500,
	        // the magic
			responsive: [
				{

					breakpoint:1440,
					settings: {
					slidesToShow:3
					}

				},
				{

					breakpoint: 1024,
					settings: {
					slidesToShow:2,
					
					}

				}, 
				{

					breakpoint:991,
					settings: {
					slidesToShow:2,
					centerMode:false,
					}

				},
				{

					breakpoint:767,
					settings: {
					slidesToShow:1,
					}

				}
			]
	    });



    // 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-serch-box").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 4. feather icon

		feather.replace();

	// 5. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		});

});

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = (evt) => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};
