let game_lose_score = document.getElementById('game__lose-score');
let broadcaster_person = document.getElementById('broadcaster__person');

const go_to_game_end_scene = function( action = 'lose' ) {
	
	let total_score = current_question_index * points_per_question;

	if( current_question_index < 1 ) {
		total_score = 0;
	}

	game_lose_score.innerHTML = '$' + total_score;

	save_user_score(total_score);
	show_alert_screen();

}

const show_alert_screen = function() {
	let alert = document.getElementById('alert__lose');
	alert.classList.add('active');
	broadcaster_person.classList.add('lose');
	setTimeout(function() {
		alert.classList.remove('active');
		broadcaster_person.classList.remove('lose');
		change_game_scene('playing', 'lose');
	}, 3000);
}

const save_user_score = function( total_score ) {
	let formData = new FormData(); 
	formData.append('action', 'save_score');
	formData.append('user_name', localStorage.getItem('user_name'));
	formData.append('user_email', localStorage.getItem('user_email'));
	formData.append('score', total_score);
	formData.append('playing_time', 10000);

	// console.log(formData)

	fetch('http://localhost/millionarie-quiz/server/controller.Scores.php', {
		"method": 'POST',
		"body": formData, // data can be `string` or {object}!
		// "headers":{ "content-type": "application/x-www-form-urlencoded" }
	}).then(response => response.json() )
		.then(data => console.log(data) )
		.catch(err => console.log(err) );
}