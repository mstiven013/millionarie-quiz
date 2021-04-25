export const login = {
	let template;

	template += `
		<form class="login__form" id="login__form">
			<input type="text" name="user-name" class="login__form-field" placeholder="Nombre completo...">
			<input type="email" name="user-email" class="login__form-field" placeholder="Correo electrónico...">
		</form>
	`;

	return template;
}