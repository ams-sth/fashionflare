import { createSlice } from "@reduxjs/toolkit";
import Men from "../../../assets/images/types/Men.jpg";
import Sneakers from "../../../assets/images/types/Sneakers.jpg";
import Teens from "../../../assets/images/types/Teens.jpg";
import Women from "../../../assets/images/types/Women.jpg";

const initialState = {
	typesOfProduct: [
		{
			id: 1,
			image: Women,
			title: "Women",
			newItem: "New items",
			newItemCount: 45,
			saleItem: "Sale items",
			saleItemCount: 15,
			path: "/women",
		},
		{
			id: 2,
			image: Men,
			title: "Men",
			newItem: "New items",
			newItemCount: 85,
			saleItem: "Sale items",
			saleItemCount: 30,
			path: "/men",
		},
		{
			id: 3,
			image: Teens,
			title: "Teens",
			newItem: "New items",
			newItemCount: 77,
			saleItem: "Sale items",
			saleItemCount: 21,
			path: "/teens",
		},
		{
			id: 4,
			image: Sneakers,
			title: "Sneakers",
			newItem: "New items",
			newItemCount: 63,
			saleItem: "Sale items",
			saleItemCount: 18,
			path: "/sneakers",
		},
	],
};

const typesSlice = createSlice({
	name: "typesOfProduct",
	initialState,
	reducers: {},
});

export default typesSlice.reducer;
