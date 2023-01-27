const sliders = (selector) => {
	const container = document.querySelector(selector);
	let slides = container.children;
	let paused = false;


	function activateAnimation() {
		paused = setInterval(() => nextSlide(), 3000);
	}
	activateAnimation();

	const nextSlide = () => {
		container.appendChild(slides[0]);
	}

	container.addEventListener('mouseenter', () => {
	 	clearInterval(paused);
	});
	container.addEventListener('mouseleave', () => {
	 	activateAnimation();
	});
};
export default sliders;