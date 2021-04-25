let play_again_buttons = document.getElementsByClassName('play__again');
let reset_buttons = document.getElementsByClassName('reset__game');

const reset_game_info = function() {
	current_question_index = 0;

	let game_actions_items = document.getElementsByClassName('game__actions-item');
	for( let i = 0; i < game_actions_items.length; i++ ) {
		game_actions_items[i].removeAttribute('disabled');
	}

	scores_list.innerHTML = '';
	for( let i = 0; i < scores_items.length; i++ ) {
		scores_items[i].classList.remove('active');
	}

	hide_broadcaster_message();
	remove_response_options_active_class();
	change_score_item();
}

for ( let i = 0; i < play_again_buttons.length; i++ ) {
	play_again_buttons[i].addEventListener('pointerdown', function() {
		reset_game_info();
		change_game_scene('lose', 'categories');
	});
}

for ( let i = 0; i < reset_buttons.length; i++ ) {
	reset_buttons[i].addEventListener('pointerdown', function() {
		reset_game_info();
		localStorage.clear();
		change_game_scene('lose', 'login');
	});
}