// ACTIVE DARKMODE

// var toggleDarkMode = function () {
// 	var htmlElement = document.documentElement;
// 	if (htmlElement.classList.contains('dark')) {
// 		htmlElement.classList.remove('dark');
// 		localStorage.setItem('theme', 'light');
// 	} else {
// 		htmlElement.classList.add('dark');
// 		localStorage.setItem('theme', 'dark');
// 	}
// };

// document.addEventListener('DOMContentLoaded', function () {
// 	var storedTheme = localStorage.getItem('theme');
// 	if (storedTheme === 'dark') {
// 		document.documentElement.classList.add('dark');
// 	}
// 	var toggleButton = document.getElementById('dark-mode-toggle');
// 	if (toggleButton) {
// 		toggleButton.addEventListener('click', toggleDarkMode);
// 	}
// });

// ACTIVE DARKMODE

// ASIDE MENU

const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');
const cancelButton = document.getElementById('closeModal');
const deleteButton = document.getElementById('deleteButton');

const showModal = () => {
	modal.classList.remove('hidden');
	modal.classList.add('flex');
	modal.classList.add('opacity-100');
	modal
		.querySelector('.transition-transform')
		.classList.remove('translate-x-full', 'opacity-0');
	modal
		.querySelector('.transition-transform')
		.classList.add('slide-in', 'opacity-100');

	modal.classList.remove('hidden');
	document.body.classList.add('overflow-hidden');
};

const hideModal = () => {
	modal
		.querySelector('.transition-transform')
		.classList.add('slide-out', 'opacity-0');
	modal
		.querySelector('.transition-transform')
		.classList.remove('translate-x-full', 'opacity-100');

	setTimeout(() => {
		modal.classList.add('hidden');
		modal.classList.remove('flex');
		modal.querySelector('.transition-transform').classList.remove('slide-out');

		modal.classList.add('hidden');
		document.body.classList.remove('overflow-hidden');
	}, 300); // Duración de la animación
};

openModalButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal);
cancelButton.addEventListener('click', hideModal);

// Optional: close modal if clicking outside of it
modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		hideModal();
	}
});

const navButtons = document.querySelectorAll('.navbtn');

navButtons.forEach((button) => {
	button.addEventListener('click', hideModal);
});

//  ASIDE MENU

// SEND EMAIL

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSumbit);

// console.log('$form', $form);

async function handleSumbit(event) {
	event.preventDefault();

	const form = new FormData(this);

	// console.log('form', form);
	// console.log('this', this);

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(form).toString(),
	})
		.then(() => {
			let successContact = document.getElementById('success-contact');

			successContact.style.display = 'block';

			setTimeout(function () {
				successContact.style.display = 'none';
			}, 1250);

			$form.reset();
		})
		.catch((error) => alert(error));
}

// SEND EMAIL
