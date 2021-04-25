const change_game_scene = function( current, next ) {
	let current_scene = document.getElementById(`game__scene-${current}`);
	let next_scene = document.getElementById(`game__scene-${next}`);
	
	current_scene.classList.remove('active');
	next_scene.classList.add('active');
}