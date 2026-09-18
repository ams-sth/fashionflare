import { createSlice } from "@reduxjs/toolkit";
import BifoldWallet from "../../../assets/images/accessories/Bifold Wallet.jpg";
import CasualJeanBelt from "../../../assets/images/accessories/Casual jean belt.jpg";
import LeatherToteBag from "../../../assets/images/accessories/Leather tote bag.jpg";
import TravelBag from "../../../assets/images/accessories/Travel bag.jpg";
import VintageBriefCase from "../../../assets/images/accessories/Vintage Briefcase.jpg";
import {
	decrementQuantity,
	incrementQuantity,
} from "../../utils/quantityutils";

const initialState = {
	aboutAccessories: [
		{
			title: "Accessories",
			desc: `Accessories are an easy and convenient way to change your look. 
      Properly selected accessories can work wonders - 
      they will make a dress from last year's collection look fresh, 
      hide flaws and emphasize dignity, and, finally, emphasize your status. 
      In addition to the decorative function, accessories have another 
      important role - to place the right accents in your outfit.`,
		},
	],
	accessories: [
		{
			id: 1,
			brand: "DEMOULLIER",
			title: "Bifold Wallet",
			desc: `This wallet was created with convenience, spaciousness, exquisite form and function in mind. It has enough space for tickets, receipts and business cards. There are two compartments, one with a zip and one with a flap to keep from being accidentally opened.`,
			image: BifoldWallet,
			price: "42",
			color: "Brown",
			quantity: 1,
		},
		{
			id: 2,
			brand: "CUYAMA",
			title: "Vintage Briefcase",
			desc: `Height 45cm / width 55cm / depth 20cm
        Main 100% Leather
        ining 100% Cotton
        3 years total extended warranty`,

			image: VintageBriefCase,
			price: "186",
			color: "Chestnut",
			quantity: 1,
		},
		{
			id: 3,
			brand: "DEMOULLIER",
			title: "Casual Jean Belt",
			desc: `This classic jean belt includes a single-loop buckle and is made entirely from real leather. Our men's belts are crafted from premium real leather and sewn with accuracy, making them resistant to repeated and heavy wear.`,
			image: CasualJeanBelt,
			price: "57",
			color: "Chestnut",
			quantity: 1,
		},
		{
			id: 4,
			brand: "ARINE WING",
			title: "Travel bag",
			desc: `The best travel bag, this multipurpose leather duffle is perfect for up to a week on the road. Numerous zipped pockets both inside and out help keep your belongings organized.`,
			image: TravelBag,
			price: "254",
			color: "Dark brown",
			quantity: 1,
		},
		{
			id: 5,
			brand: "DEMOULLIER",
			title: "Leather Tote Bag",
			desc: `The tote bag is made from naturally supple leather with a lovely pebble grain finish and devoid of polyester linings or plastic zips. Two slide pockets lined entirely in 100% cotton that are ideal for a smart phone and keys.`,
			image: LeatherToteBag,
			price: "135",
			color: "Chestnut",
			quantity: 1,
		},
	],
};

const accessorySlice = createSlice({
	name: "Accessories",
	initialState,
	reducers: {
		increment(state, action) {
			incrementQuantity(state.accessories, action);
		},
		decrement(state, action) {
			decrementQuantity(state.accessories, action);
		},
	},
});

export const { increment, decrement } = accessorySlice.actions;
export default accessorySlice.reducer;
