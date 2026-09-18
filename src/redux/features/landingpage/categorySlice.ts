import { createSlice } from "@reduxjs/toolkit";
import Accessories from "../../../assets/images/Category/Accessories.jpg";
import Dresses from "../../../assets/images/Category/Dresses.jpg";
import MenCategory from "../../../assets/images/Category/Men Category.jpg";
import WomenCategory from "../../../assets/images/Category/WomenCategory.jpg";

const initialState = {
	category: [
		{
			id: 1,
			image: MenCategory,
			name: "Men",
			path: "/men",
		},
		{
			id: 2,
			image: WomenCategory,
			name: "Women",
			path: "/women",
		},

		{
			id: 3,
			image: Accessories,
			name: "Accessories",
			path: "/accessories",
		},
		{ id: 4, image: Dresses, name: "Dresses", path: "/dress" },
	],
};

const categorySlice = createSlice({
	name: "Category",
	initialState,
	reducers: {},
});

export default categorySlice.reducer;
