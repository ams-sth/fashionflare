export const validateRegisterForm = (FormData: Record<string, string>) => {
	const errors: Record<string, string> = {};
	let isValid = true;

	if (!FormData.firstName) {
		errors.firstName = "Enter your first name";
		isValid = false;
	}

	if (!FormData.lastName) {
		errors.lastName = "Enter your last name";
		isValid = false;
	}

	if (!FormData.email) {
		errors.email = "Enter your email address";
		isValid = false;
	} else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
		errors.email = "Enter your valid email address";
		isValid = false;
	}

	if (!FormData.password) {
		errors.password = "Enter your password";
		isValid = false;
	} else {
		// Password length validation
		if (FormData.password.length < 8) {
			errors.password = "Password must be at least 8 characters long";
			isValid = false;
		}

		// Capital letter validation
		if (!/[A-Z]/.test(FormData.password)) {
			errors.password = "Password must contain at least one capital letter";
			isValid = false;
		}

		// Special character validation
		if (!/[!@#$%^&*(),.?":{}|<>]/.test(FormData.password)) {
			errors.password = "Password must contain at least one special character";
			isValid = false;
		}
	}

	return { errors, isValid };
};

export const validateLoginForm = (FormData: Record<string, string>) => {
	const errors: Record<string, string> = {};
	let isValid = true;

	if (!FormData.email) {
		errors.email = "Enter your email address";
		isValid = false;
	} else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
		errors.email = "Enter your valid email address";
		isValid = false;
	}

	if (!FormData.password) {
		errors.password = "Enter your password";
		isValid = false;
	}
	return { errors, isValid };
};

export const ValidateCheckoutForm = (FormData: Record<string, string>) => {
	const errors: Record<string, string> = {};
	let isValid = true;
	if (!FormData.lastName) {
		errors.lastName = "Enter your last name";
		isValid = false;
	}

	if (!FormData.email) {
		errors.email = "Enter your email address";
		isValid = false;
	} else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
		errors.email = "Enter your valid email address";
		isValid = false;
	}

	if (!FormData.address) {
		errors.address = "Enter your address";
		isValid = false;
	}

	if (!FormData.city) {
		errors.city = "Enter a City";
		isValid = false;
	}
	if (!FormData.state) {
		errors.state = "Select state/province";
		isValid = false;
	}
	if (!FormData.zipCode) {
		errors.zipCode = "Enter a ZIP/Postal code";
		isValid = false;
	}

	if (!FormData.cardNumber) {
		errors.cardNumber = "Enter your Card Number";
		isValid = false;
	}

	if (!FormData.expirationDate) {
		errors.expirationDate = "Enter a valid expiration date";
		isValid = false;
	}

	if (!FormData.securityCode) {
		errors.securityCode = "Enter the CVV or security code on your card";
		isValid = false;
	}

	if (!FormData.cardName) {
		errors.cardName = `Enter your name exactly as its written on your card`;
		isValid = false;
	}

	return { errors, isValid };
};
