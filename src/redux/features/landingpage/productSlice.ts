import { createSlice } from "@reduxjs/toolkit";
import LoosePaddedJacket from "../../../assets/images/products/Loose Padded Jacket.jpg";
import LoosePaddedJacket2 from "../../../assets/images/products/Loose Padded Jacket 2.jpg";
import LoosePaddedJacket3 from "../../../assets/images/products/Loose Padded Jacket 3.jpg";
import LoosePaddedJacket4 from "../../../assets/images/products/Loose Padded Jacket 4.jpg";
import MenSmoothJacket from "../../../assets/images/products/Men Smooth Jacket.jpg";
import MenSmoothJacketTwo from "../../../assets/images/products/Men Smooth Jacket 2.jpg";
import MenSmoothJacketThree from "../../../assets/images/products/Men Smooth Jacket 3.jpg";
import MenSmoothJacketFour from "../../../assets/images/products/Men Smooth Jacket 4.jpg";
import SatinpaddedJacket from "../../../assets/images/products/Satin Padded Jacket.jpg";
import SatinpaddedJacket2 from "../../../assets/images/products/Satin Padded Jacket 2.jpg";
import SatinpaddedJacket3 from "../../../assets/images/products/Satin Padded Jacket 3.jpg";
import SatinpaddedJacket4 from "../../../assets/images/products/Satin Padded Jacket 4.jpg";
import Shorts from "../../../assets/images/products/Shorts.jpg";

const initialState = {
	products: [
		{
			id: 1,
			company: "CLAYTAN",
			price: 5,
			currentImageIndex: 0,
			image: [Shorts, Shorts, Shorts, Shorts],
			name: "Short demin shorts",
			rating: 0,
			color: "Dark Blue",
			size: ["XS", "S", "M", "M/L", "L"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 2,
			company: "CANVERSE",
			currentImageIndex: 0,
			image: [
				MenSmoothJacket,
				MenSmoothJacketTwo,
				MenSmoothJacketThree,
				MenSmoothJacketFour,
			],
			name: "Men's Smooth Jacket",
			rating: 0,
			type: "Sweater",
			sku: "M75009BL1",
			weight: "0.65 kg",
			color: ["Black", "Green"],
			size: ["XS", "S", "M", "M/L", "L"],
			currentSizeIndex: 0,
			price: 47,
			quantity: 1,
			tag: ["collection-hand-muffs", "men", "new"],
		},
		{
			id: 3,
			company: "COLVIN KLEIN",
			price: 53,
			currentImageIndex: 0,
			image: [
				LoosePaddedJacket,
				LoosePaddedJacket2,
				LoosePaddedJacket3,
				LoosePaddedJacket4,
				LoosePaddedJacket4,
			],
			name: "Loose padded Jacket",
			rating: 0,
			color: "Brown",
			size: ["XS", "S", "M", "M/L", "L"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 4,
			company: "COLVIN KLEIN",
			price: 29,
			currentImageIndex: 0,
			image: [
				SatinpaddedJacket,
				SatinpaddedJacket2,
				SatinpaddedJacket3,
				SatinpaddedJacket4,
			],
			name: "Satin Padded Jacket",
			rating: 0,
			color: "Cyan",
			size: ["XS", "S", "M", "M/L", "L"],
			currentSizeIndex: 0,
			quantity: 1,
		},
	],
};

const productSlice = createSlice({
	name: "Products",
	initialState,
	reducers: {
		increase(state, action) {
			const productId = action.payload;

			const foundProduct = state.products.find(
				(product) => product.id === productId,
			);
			if (foundProduct) {
				foundProduct.quantity++;
			} else {
				console.error(`Product not found`);
			}
		},
		decrease(state, action) {
			const productId = action.payload;
			const foundProduct = state.products.find(
				(product) => product.id === productId,
			);
			if (foundProduct) {
				foundProduct.quantity--;
			} else {
				console.error(`Product not found`);
			}
		},
		changeImage(state, action) {
			const { productId, newIndex } = action.payload;

			const productToChange = state.products.find((p) => p.id === productId);
			if (
				productToChange &&
				newIndex >= 0 &&
				newIndex < productToChange.image.length
			) {
				productToChange.currentImageIndex = newIndex;
			}
		},
		setProductRating(state, action) {
			const { productId, rating } = action.payload;
			const product = state.products.find(
				(product) => product.id === productId,
			);
			if (product) {
				product.rating = rating;
			}
		},
		changeSize(state, action) {
			const { productId, newIndex } = action.payload;
			const sizeToChange = state.products.find((p) => p.id === productId);
			if (
				sizeToChange &&
				newIndex >= 0 &&
				newIndex < sizeToChange.size.length
			) {
				sizeToChange.currentSizeIndex = newIndex;
			}
		},
	},
});

export const { increase, decrease, changeImage, setProductRating, changeSize } =
	productSlice.actions;
export default productSlice.reducer;
