var burger = document.querySelector(".burger");
var nav = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links li");

function parallax(element, distance, speed) {
	const item = document.querySelector(element);

	item.style.transform = `translateY(${distance * speed}px)`;
}

const navSlide = () => {

	//Toggle Nav
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.4s ease forwards ${
					index / 12 + 0.5
				}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();
var prevScrollpos = window.scrollY;
window.addEventListener("scroll", function () {
	let scrollAmount = document.querySelector("header").offsetHeight;
	//fade animation for about page
	if (window.scrollY > scrollAmount - 350) {
		$("#about div").addClass("fadeAnim");
	}

	var currentScrollPos = window.scrollY;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-15vh";
	}
	prevScrollpos = currentScrollPos;

});

$(document).ready(function () {
	//scroll to section animation
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				500,
				function () {
					window.location.hash = hash;

				}
			);

			nav.classList.toggle("nav-active");
	
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = "";
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${
						index / 7 + 0.5
					}s`;
				}
			});
	
			burger.classList.toggle("toggle");
		}
	});
});
