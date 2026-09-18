import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	totalQuantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		addtocart: (state, action) => {
			// Find product
			const existingItem = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);

			if (existingItem) {
				state.cartItems = state.cartItems.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity + action.payload.quantity,
							}
						: item,
				);
			} else {
				state.cartItems = [...state.cartItems, action.payload];
			}
		},
		removefromcart: (state, action) => {
			const idToRemove = action.payload;
			const itemToRemove = state.cartItems.find(
				(item) => item.id === idToRemove,
			);

			if (itemToRemove) {
				const updatedItems = state.cartItems.filter(
					(item) => item.id !== idToRemove,
				);

				return {
					...state,
					cartItems: updatedItems,
					totalQuantity: state.totalQuantity - itemToRemove.quantity,
					totalPrice:
						state.totalPrice - itemToRemove.price * itemToRemove.quantity,
				};
			}

			return state;
		},

		increase(state, action) {
			const existingItem = state.cartItems.find(
				(item) => item.id === action.payload.id,
			);

			if (existingItem) {
				state.cartItems = state.cartItems.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity + 1,
							}
						: item,
				);
			} else {
				state.cartItems = [...state.cartItems, action.payload];
			}
		},
		decrease(state, action) {
			const existingItem = state.cartItems.filter(
				(item) => item.id === action.payload.id,
			);

			if (existingItem) {
				state.cartItems = state.cartItems.map((item) =>
					item.id === action.payload.id
						? {
								...item,
								quantity: item.quantity - 1,
							}
						: item,
				);
			} else {
				state.cartItems = [...state.cartItems, action.payload];
			}
		},
	},
});

export const { addtocart, removefromcart, increase, decrease } =
	cartSlice.actions;
export default cartSlice.reducer;
