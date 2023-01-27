const sliders = (selector) => {
	const container = document.querySelector(selector);
	let slides = container.children;
	let paused = false;

	for (const slide of slides) {
		slide.classList.add('animated');
		slide.classList.add('slideInRight');
	}

	function activateAnimation() {
		paused = setInterval(() => nextSlide(), 3000);
	}
	activateAnimation();

	const nextSlide = () => {
		for (let i = 0; i <= slides.length; i++) {
			container.appendChild(slides[0]);
		}
	}

	container.addEventListener('mouseenter', () => {
	 	clearInterval(paused);
	});
	container.addEventListener('mouseleave', () => {
	 	activateAnimation();
	});
};
export default sliders;