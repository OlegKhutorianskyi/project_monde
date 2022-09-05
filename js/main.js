$(function(){

	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 800,
		fade: true
	});

});


let navbar = document.getElementById('navbar').classList
let active_class = "navbar_scrolled"

window.addEventListener('scroll', e => {
	if(scrollY > 580) navbar.add(active_class)
	else navbar.remove(active_class)
  })