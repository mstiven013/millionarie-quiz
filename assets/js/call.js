// Call friend
let call_button = document.getElementById('game__actions-call');
let call_friend = document.getElementById('call__friend');
let call_friend_icon = document.getElementById('call__friend-icon');
let call_friend_response = document.getElementById('call__friend-response');

const call_action = function() {

	if( call_button.disabled )
		return false;

	show_broadcaster_message('¿Quieres usar esta ayuda?');
	broadcaster_yes.setAttribute('data-action', 'call');
}

const call_show_friend = function() {
	call_button.setAttribute('disabled', 'disabled');
	show_broadcaster_message("Let's see what your friend says", false);
	call_friend.classList.add('show');
	
	setTimeout(function() {
		call_change_state();
	}, 3000);
}

const call_change_state = function() {

	let random = Math.floor(Math.random() * question_letters.length);

	call_friend_icon.classList.add('responded');
	call_friend_response.innerHTML = 'I thing ' + question_letters[random];
	call_friend_response.classList.add('show');

	setTimeout(function() {
		call_friend.classList.remove('show');
		hide_broadcaster_message();
	}, 4000);

}

call_button.addEventListener('pointerdown', call_action);