import { createSlice } from "@reduxjs/toolkit";
import ClassicMensTshirt from "../../../assets/images/men/Classic Mens Tshirt.jpg";
import InsulatedWinterJeans from "../../../assets/images/men/Insulated winter jeans.jpg";
import LooseMenShorts from "../../../assets/images/men/Loose mens shorts.jpg";
import LooseThinTshirt from "../../../assets/images/men/Loose thin Tshirt.jpg";
import TshirtWithLongSleeve from "../../../assets/images/men/Tshirt with long sleeves.jpg";
import {
	decrementQuantity,
	incrementQuantity,
} from "../../utils/quantityutils";

const initialState = {
	menClothes: [
		{
			id: 1,
			brand: "KOACH",
			image: InsulatedWinterJeans,
			title: "Insulated Winter Jeans",
			price: "7",
			color: ["Blue"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere between the knees and the ankles, covering both legs separately. In the United Kingdom, the word pants generally means underwear and not trousers.`,
		},
		{
			id: 2,
			brand: "DACOSTE",
			image: LooseThinTshirt,
			title: "Loose Thin T-shirt",
			price: "78",
			color: ["Blue", "Cyan", "Dark Blue", "Red", "Yellow"],
			sizes: ["XSS", "XS", "S", "M", "M/L", "XL", "L", "XXL", "XXXL"],
			quantity: 1,
			desc: `A T-shirt, or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.`,
		},
		{
			id: 3,
			brand: "CABIAN",
			image: TshirtWithLongSleeve,
			title: "T-shirt With Long Sleeve",
			price: "34",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A shirt, also an overshirt or a classic shirt, is a type of clothing related to the outer underwear. Historically, the shirt refers specifically to underwear, but since the 1960s it can be worn on its own, without being covered with other clothes.`,
		},
		{
			id: 4,
			brand: "UNDER ARMOR",
			image: LooseMenShorts,
			title: "Loose Men's Shorts",
			price: "17",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `Shorts are a garment worn over the pelvic area, circling the waist and splitting to cover the upper part of the legs, sometimes extending down to the knees but not covering the entire length of the leg.`,
		},
		{
			id: 5,
			brand: "CABIAN",
			image: ClassicMensTshirt,
			title: "Classic Men's T-shirt",
			price: "39",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A shirt, also an overshirt or a classic shirt, is a type of clothing related to the outer underwear. Historically, the shirt refers specifically to underwear, but since the 1960s it can be worn on its own, without being covered with other clothes.`,
		},
	],
};

const menSlice = createSlice({
	name: "Men",
	initialState,
	reducers: {
		increment(state, action) {
			incrementQuantity(state.menClothes, action);
		},
		decrement(state, action) {
			decrementQuantity(state.menClothes, action);
		},
	},
});

export const { increment, decrement } = menSlice.actions;
export default menSlice.reducer;
