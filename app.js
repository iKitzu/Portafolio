const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'Black';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function cycleFace() {
const welcomeElement = document.getElementById('welcome');
const baseText = 'Bienvenido ';
const faces = ['(ᵔᵕᵔ)/', '(≧◡≦)/', '₍•͈ᴗ•͈₎'];
let index = 0;

function updateFace() {
	welcomeElement.innerHTML = baseText + faces[index];
	index = (index + 1) % faces.length;
	setTimeout(updateFace, 2500); // Cambia la carita cada 2.5 segundos
}

updateFace();
}

document.addEventListener('DOMContentLoaded', cycleFace);
