import gsap from 'gsap';

export function slideIn(element) {
	gsap.fromTo(
		element,
		{ x: -200, opacity: 0 },
		{ x: 0, opacity: 1, duration: 2 }
	);
}
