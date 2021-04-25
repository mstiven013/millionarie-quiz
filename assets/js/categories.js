'use strict'

let button_play = document.getElementById('play__now');
let button_prev = document.getElementById('select__category-prev');
let button_next = document.getElementById('select__category-next');

const check_categories_arrows = function() {

	let current_cat = document.querySelector('.select__category-item.active');

	if( !!current_cat ) {
		// Check if exists next item and enable or disable next button
		if( !!current_cat.nextElementSibling ) {
			button_next.removeAttribute('disabled');
		} else {
			button_next.setAttribute('disabled', 'disabled');
		}

		// Check if exists prev item and enable or disable prev button
		if( !!current_cat.previousElementSibling ) {
			button_prev.removeAttribute('disabled');
		} else {
			button_prev.setAttribute('disabled', 'disabled');
		}
	}

}

const go_to_next_category = function() {

	let current_cat = document.querySelector('.select__category-item.active');
	if( !!current_cat ) {

		let next_cat = current_cat.nextElementSibling;
		// Check if exists next item and enable or disable next button
		if( !!next_cat ) {
			current_cat.classList.remove('active');
			next_cat.classList.add('active');
		}

		// Check categories arrows to enable or disable
		check_categories_arrows();

	}

}

const go_to_prev_category = function() {

	let current_cat = document.querySelector('.select__category-item.active');
	if( !!current_cat ) {

		let prev_cat = current_cat.previousElementSibling;
		// Check if exists prev item and enable or disable prev button
		if( !!prev_cat ) {
			current_cat.classList.remove('active');
			prev_cat.classList.add('active');
		}

		// Check categories arrows to enable or disable
		check_categories_arrows();

	}
	
}

const select_current_category = function() {

	let current_cat = document.querySelector('.select__category-item.active');
	let category_name = current_cat.getAttribute('data-category_name');

	fetch('http://localhost/millionarie-quiz/questions.json')
		.then(response => response.json())
		.then(data => set_questions_list(data[category_name]) );

}


button_next.addEventListener('pointerdown', go_to_next_category);
// button_next.addEventListener('mousedown', go_to_next_category);

button_prev.addEventListener('pointerdown', go_to_prev_category);
// button_prev.addEventListener('mousedown', go_to_next_category);

button_play.addEventListener('pointerdown', select_current_category);