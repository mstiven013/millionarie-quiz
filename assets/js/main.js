'use strict'

// Define constants of login vars
const login_form = document.getElementById('login__form');
const user_name = document.getElementById('user__name');
const user_email = document.getElementById('user__email');
const login_button = document.getElementById('login__button');

// Validate login fields to active or disable login button
const validate_login = function() {
	if( !!user_name.value && !!user_email.value )
		login_button.removeAttribute('disabled');
	else
		login_button.setAttribute('disabled', 'disabled');
}

// Save user data in localstorage
const save_login_data = function(e) {
	e.preventDefault();

	// Delete last user info
	localStorage.removeItem('user_name');
	localStorage.removeItem('user_email');

	// Set new user info
	localStorage.setItem('user_name', user_name.value);
	localStorage.setItem('user_email', user_email.value);

	// Change game scene
	return change_game_scene('login', 'categories');
}

// Change value of field's from login form
user_name.addEventListener('keyup', validate_login);
user_name.addEventListener('change', validate_login);
user_email.addEventListener('keyup', validate_login);
user_email.addEventListener('change', validate_login);

// Submit login form event
login__form.addEventListener('submit', save_login_data);