// Broadcaster buttons
let broadcaster = document.getElementById('broadcaster__messages-container');
let broadcaster_messages = document.getElementById('broadcaster__messages');
let broadcaster_buttons = document.getElementById('broadcaster__messages-button');
let broadcaster_yes = document.getElementById('broadcaster__messages-yes');
let broadcaster_no = document.getElementById('broadcaster__messages-no');

// common function to show broadcaster messages
const show_broadcaster_message = function( message, buttons = true ) {

	if( buttons ) {
		broadcaster_buttons.classList.remove('hidden');
	} else {
		broadcaster_buttons.classList.add('hidden');
	}

	broadcaster.classList.add('show');
	
	setTimeout(function() {
		typing_inner_content(broadcaster_messages, message);
	}, 200);

}

const broadcaster_confirm_answer = function( ) {
	let action = broadcaster_yes.getAttribute('data-action');
	let message = '';
	
	switch( action ) {
		case 'computer':
			show_broadcaster_message( 'Computer remove two wrong answer options', false);
			setTimeout(function() {
				computer_delete_options(deleted_options);
			}, 1000);
		break;
		case 'call':
			call_show_friend();
		break;
		case 'answer':
			validate_current_response();
		break;
		case 'next_question':
			show_broadcaster_message( 'Let start with questions', false);
			setTimeout(function() {
				print_question(current_question_index);
				change_score_item();
			}, 1000);
		break;
	}
}

const hide_broadcaster_message = function() {
	broadcaster.classList.remove('show');
}

broadcaster_yes.addEventListener('pointerdown', broadcaster_confirm_answer);
broadcaster_no.addEventListener('pointerdown', hide_broadcaster_message);