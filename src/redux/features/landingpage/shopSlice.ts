import { createSlice } from "@reduxjs/toolkit";
import ImageEight from "../../../assets/images/shop/Image Eight.jpg";
import ImageFive from "../../../assets/images/shop/Image Five.jpg";
import ImageFour from "../../../assets/images/shop/Image Four.jpg";
import ImageNine from "../../../assets/images/shop/Image Nine.jpg";
import ImageOne from "../../../assets/images/shop/Image One.jpg";
import ImageSeven from "../../../assets/images/shop/Image Seven.jpg";
import ImageSix from "../../../assets/images/shop/Image Six.jpg";
import ImageThree from "../../../assets/images/shop/Image Three.jpg";
import ImageTwo from "../../../assets/images/shop/Image Two.jpg";

const initialState = {
	shopImages: [
		{
			id: 1,
			image: ImageOne,
			name: "First Image",
		},
		{
			id: 2,
			image: ImageTwo,
			name: "Second Image",
		},
		{
			id: 3,
			image: ImageThree,
			name: "Third Image",
		},
		{
			id: 4,
			image: ImageFour,
			name: "Fourth Image",
		},

		{ id: 5, image: ImageFive, name: "Fifth Image" },

		{
			id: 6,
			image: ImageSix,
			name: "Sixth Image",
		},

		{
			id: 7,
			image: ImageSeven,
			name: "Seventh Image",
		},
		{
			id: 8,
			image: ImageEight,
			name: "Eighth Image",
		},
		{
			id: 9,
			image: ImageNine,
			name: "Nineth Image",
		},
	],
};

const shopSlice = createSlice({
	name: "Shop",
	initialState,
	reducers: {},
});

export default shopSlice.reducer;
