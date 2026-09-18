export const incrementQuantity = (state, action) => {
	const productId = action.payload;
	const foundProduct = state.find((product) => product.id === productId);
	if (foundProduct) {
		foundProduct.quantity++;
	} else {
		console.error(`Product not found`);
	}
};
export const decrementQuantity = (state, action) => {
	const productId = action.payload;
	const foundProduct = state.find((product) => product.id === productId);
	if (foundProduct) {
		foundProduct.quantity--;
	} else {
		console.error(`Product not found`);
	}
};
