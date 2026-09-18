import { createSlice } from "@reduxjs/toolkit";

import Cabian from "../../../assets/images/brands/Cabian.jpg";
import Cabian2 from "../../../assets/images/brands/Cabian 2.jpg";
import Canverse from "../../../assets/images/brands/Canvers.jpg";
import Claytan from "../../../assets/images/brands/Claytan.jpg";
import Clorks from "../../../assets/images/brands/Clorks.jpg";
import ColeHoon from "../../../assets/images/brands/Cole Hoon.jpg";
import ColeHoon2 from "../../../assets/images/brands/Cole Hoon 2.jpg";
import ColvinKlein from "../../../assets/images/brands/Colvin Klein.jpg";
import Dacoste from "../../../assets/images/brands/Dacoste.jpg";
import Koach from "../../../assets/images/brands/Koach.jpg";
import Saucany from "../../../assets/images/brands/Saucany.jpg";
import UnderArmor from "../../../assets/images/brands/Under Armor.jpg";

const initialState = {
	brands: [
		{
			image: Cabian,
			name: "Cabian",
		},
		{
			image: Canverse,
			name: "Canverse",
		},
		{
			image: Claytan,
			name: "Claytan",
		},
		{
			image: Clorks,
			name: "Clorks",
		},
		{
			image: ColeHoon,
			name: "ColeHoon",
		},
		{
			image: ColvinKlein,
			name: "ColvinKlein",
		},
		{
			image: Dacoste,
			name: "Dacoste",
		},
		{
			image: Koach,
			name: "Koach",
		},
		{
			image: Saucany,
			name: "Saucany",
		},
		{
			image: UnderArmor,
			name: "UnderArmor",
		},
		{
			image: ColeHoon2,
			name: "ColeHoon2",
		},
		{
			image: Cabian2,
			name: "Cabian2",
		},
	],
};

const brandSlice = createSlice({
	name: "Brands",
	initialState,
	reducers: {},
});

export default brandSlice.reducer;
