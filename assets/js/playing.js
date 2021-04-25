var questions = [];
var options = document.getElementsByClassName('game__options-item');
var current_question_index = 0;
var question_letters = ["A", "B", "C", "D"];

// Question items
let response_items = document.getElementsByClassName('game__options-item');

// Scores
var points_per_question = 100;
var scores_list = document.getElementById('scores__list');
let scores_items = document.getElementsByClassName('scores__list-item');
var scores_count = document.getElementById('scores__account-count');

// Set questions list and change categories scene for playing scene
const set_questions_list = function( list ) {

	if( !!list ) questions = list;

	scores_list.innerHTML = '';
	for (let i = 1; i < list.length + 1; i++) {
		let this_point = points_per_question * i;
		let active_class = i === 1 ? 'active' : '';
		let html_score_item = `<p class="scores__list-item ${active_class}"><span>${i}.</span> $${this_point}</p>`;
		scores_list.innerHTML += html_score_item;
	}

	// Change game scene
	change_game_scene('categories', 'playing');

	// Print first question
	print_question(0);

}

const print_question = function( index ) {

	current_question_index = index;

	let question = questions[index];
	let pregunta_html = document.getElementById('game__question');
	let opciones_html = document.getElementsByClassName('game__options-item');

	for ( let i = 0; i < options.length; i++ ) {
		options[i].removeAttribute('disabled', 'disabled');
	}

	typing_inner_content(pregunta_html, question.pregunta);

	for (let i = 0; i < question.opciones.length; i++ ) {
		let option_text = question_letters[i] + '. ' + question.opciones[i];
		typing_inner_content(opciones_html[i], option_text);
	}

	remove_response_options_active_class();

}

const select_response_option = function() {

	if( this.disabled )
		return false;

	// Remove active class for all response options
	remove_response_options_active_class();

	this.classList.add('active');

	show_broadcaster_message('¿Estas seguro que esta es la respuesta?');
	broadcaster_yes.setAttribute('data-action', 'answer');

}

const validate_current_response = function() {
	let response = document.querySelector('.game__options-item.active');
	let response_letter = response.id.replace('game__options-item-', '');

	let current_answer = questions[current_question_index];
	let current_response_index = current_answer.respuesta - 1;
	let current_answer_response = question_letters[current_response_index];

	if(response_letter === current_answer_response) {
		console.log('siguiente mor')
		return go_to_next_question();
	} else {
		return go_to_game_end_scene('lose');
	}
}

const go_to_next_question = function() {
	let next_question = questions[current_question_index + 1];
	
	if( !!next_question ) {
		current_question_index = current_question_index + 1;
		show_broadcaster_message('Man you are star!', false);

		setTimeout(function() {
			show_broadcaster_message('Are you ready for the next question?');
			broadcaster_yes.setAttribute('data-action', 'next_question');
		}, 3000);
	} else {
		console.log('Ganaste!')
	}
}

const change_score_item = function() {

	let current_points =  points_per_question * (current_question_index);

	for( let i = 0; i < scores_items.length; i++ ) {
		scores_items[i].classList.remove('active');
	}
	
	if( scores_items.length > 0 ) {
		scores_items[current_question_index].classList.add('active');
	}

	scores_count.innerHTML = '$' + current_points;

}

const remove_response_options_active_class = function() {
	for( let i = 0; i < response_items.length; i++ ) {
		response_items[i].classList.remove('active');
	}
}

// question_timer();

for( let i = 0; i < response_items.length; i++ ) {
	response_items[i].addEventListener('pointerdown', select_response_option);
}

/*

fetch('/questions.json')
		.then(response => response.json())
		.then(data => set_questions_list(data['categoria_uno']) );

*/