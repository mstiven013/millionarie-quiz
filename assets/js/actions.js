// Timer
let timer_item = document.getElementById('game__actions-timer');
let current_time = typeof timer_item.innerHTML == 'string' ? parseInt(timer_item.innerHTML) : timer_item.innerHTML;

// Actions
let audience_button = document.getElementById('game__actions-audience');

const question_timer = function() {

	let this_timer = setInterval(function() {
		current_time--;
		timer_item.innerHTML = current_time;

		// Show effect
		if( current_time == 5 ) {
			timer_item.classList.add('waves__effect');
		}

		// Stop timer
		if( current_time <= 0 ) {
			timer_item.classList.remove('waves__effect');
			clearInterval(this_timer);

			// Run timer end
		}

	}, 1000);

}

const typing_inner_content = function( selector, text ) {
	
	let index = 0;
	let speed = 10;

	selector.innerHTML = '';
	write();

	function write() {
		if (index < text.length) {
			selector.innerHTML += text[index];
			index++;
			setTimeout(write, speed);
		}
	}
}