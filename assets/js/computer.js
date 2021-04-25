let computer_button = document.getElementById('game__actions-computer');
let deleted_options = [];

const computer_action = function() {

	if(computer_button.disabled)
		return false;

	let current_question = questions[current_question_index];
	let current_options = current_question.opciones;

	let correct_response_index = current_question.respuesta - 1;
	let correct_response_letter = question_letters[correct_response_index];

	while ( deleted_options.length < 2 ) {
		let random = Math.floor(Math.random() * 4);
		let random_letter = question_letters[random];
		let deleted_filter = deleted_options.filter(elem => elem === random_letter);

		if( random_letter !== correct_response_letter && deleted_filter.length < 1 ) {
			deleted_options.push( random_letter );
		}
	}

	if( deleted_options.length === 2 ) {

		show_broadcaster_message('¿Quieres usar esta ayuda?');
		broadcaster_yes.setAttribute('data-action', 'computer');

	}
	
}

const computer_delete_options = function( options ) {
	console.log(options)
	for ( let i = 0; i < options.length; i++ ) {
		let item = document.getElementById(`game__options-item-${options[i]}`);
		item.innerHTML = '';
		item.setAttribute('disabled', 'disabled');
	}

	// Remove active class for all response options
	remove_response_options_active_class();
	computer_button.setAttribute('disabled', 'disabled');

	setTimeout(function() {
		hide_broadcaster_message();
	}, 3000);

}

computer_button.addEventListener('pointerdown', computer_action);