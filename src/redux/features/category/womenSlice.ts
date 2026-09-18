import { createSlice } from "@reduxjs/toolkit";

import Women from "../../../assets/images/Category/Women.jpg";
import DenimDress from "../../../assets/images/women/Denim dress.jpg";
import HighWaistTrousers from "../../../assets/images/women/High Waist Trousers.jpg";
import LightLaceTop from "../../../assets/images/women/Light Lace Top.jpg";
import LongSleeveShirt from "../../../assets/images/women/Long Sleeve Shirt.jpg";
import SlimDressLinenStyle from "../../../assets/images/women/Slim dress linen style.jpg";
import {
	decrementQuantity,
	incrementQuantity,
} from "../../utils/quantityutils";

const initialState = {
	women: [
		{
			title: "Women",
			image: Women,
			description:
				"The latest Women fashion collections for Spring/Summer and Fall/Winter are now available to bought! Our online store presents a wide selection of fashionable apparel specifically designed to make you look your best. We have put together the most stylish and trendy looks for you so that you can keep up with the latest fashion trends. Every woman wants to look her best, but sometimes it can be hard to find the right clothes. This fashion collection will have you looking your best in no time!",
		},
	],
	womenClothes: [
		{
			id: 1,
			brand: "KOACH",
			image: HighWaistTrousers,
			title: "High Waist Trousers",
			price: "$67",
			color: ["Blue"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere between the knees and the ankles, covering both legs separately. In the United Kingdom, the word pants generally means underwear and not trousers.`,
		},
		{
			id: 2,
			brand: "DACOSTE",
			image: DenimDress,
			title: "Denim dress for girls",
			price: "$16",
			color: ["Blue", "Cyan", "Dark Blue", "Red", "Yellow"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment). It consists of a top piece that covers the torso and hangs down over the legs.`,
		},
		{
			id: 3,
			brand: "CABIAN",
			image: LongSleeveShirt,
			title: "Long Sleeve Shirt",
			price: "$46",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A shirt, also an overshirt or a classic shirt, is a type of clothing related to the outer underwear. Historically, the shirt refers specifically to underwear, but since the 1960s it can be worn on its own, without being covered with other clothes.`,
		},
		{
			id: 4,
			brand: "UNDER ARMOR",
			image: SlimDressLinenStyle,
			title: "Slim Dress Linen Style",
			price: "$46",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment). It consists of a top piece that covers the torso and hangs down over the legs.`,
		},
		{
			id: 5,
			brand: "CABIAN",
			image: LightLaceTop,
			title: "Light Lace Top",
			price: "$46",
			color: ["Khaki", "Pink", "Cyan", "Black"],
			sizes: ["XS", "S", "M", "M/L", "XL", "L"],
			quantity: 1,
			desc: `A dress is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment). It consists of a top piece that covers the torso and hangs down over the legs.`,
		},
	],
};

const womenSlice = createSlice({
	name: "Women",
	initialState,
	reducers: {
		increment(state, action) {
			incrementQuantity(state.womenClothes, action);
		},

		decrement(state, action) {
			decrementQuantity(state.womenClothes, action);
		},
	},
});

export const { increment, decrement } = womenSlice.actions;
export default womenSlice.reducer;
