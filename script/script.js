document.addEventListener('DOMContentLoaded', () => {
	const mobIcons = document.getElementById('icon')
	const mobileMenu = document.getElementById('menu')

	mobIcons.addEventListener('click', () => {
		mobileMenu.classList.toggle('show-menu')
	})
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})