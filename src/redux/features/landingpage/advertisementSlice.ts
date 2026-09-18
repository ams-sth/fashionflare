import { createSlice } from "@reduxjs/toolkit";

import FirstSlide from "../../../assets/images/FirstSlide.jpg";
import SecondSlide from "../../../assets/images/SecondSlide.jpg";

const initialState = {
	ads: [
		{
			id: 1,
			image: FirstSlide,
			title: "Shopify 2.0 Full Sync",
			description: `The theme has been translated into all languages. Built-in support for
                    subscriptions. 3D & Variants Ready.`,
			button: "SUBSCRIBE",
		},
		{
			id: 2,
			image: SecondSlide,
			title: "89$",
			discount: "38$",
			description: `Shopify 2.0. Developed interface for creating your own unique pages. Sections Everywhere Ready.`,
			button: "SHOP NOW",
		},
	],
};

const advertisementSlice = createSlice({
	name: "Advertisement",
	initialState,
	reducers: {},
});

export default advertisementSlice.reducer;
