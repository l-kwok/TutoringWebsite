function parallax(element, distance, speed) {
	const item = document.querySelector(element);

	item.style.transform = `translateY(${distance * speed}px)`;
}

const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	//Toggle Nav
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle("toggle");
	});
};

navSlide();

window.addEventListener("scroll", function () {
	let scrollAmount = document.querySelector("header").offsetHeight;
	if (window.scrollY > scrollAmount - 350) {
		$("#about div").addClass("fadeAnim");
	}
});

$(document).ready(function () {
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
          navSlide();

				}
			);
		}
	});
});
