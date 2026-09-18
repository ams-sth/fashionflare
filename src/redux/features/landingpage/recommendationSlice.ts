import { createSlice } from "@reduxjs/toolkit";
import ClassicDenimTrousers from "../../../assets/images/recommendations/Classic Denim Trousers.jpg";
import ClassicDenimTrousersTwo from "../../../assets/images/recommendations/Classic Denim Trousers 1.jpg";
import LongCargoSkirt from "../../../assets/images/recommendations/Long Cargo Skirt.jpg";
import LongCargoSkirtTwo from "../../../assets/images/recommendations/Long Cargo Skirt 1.jpg";
import LongSleeveOfficeShirt from "../../../assets/images/recommendations/LongSleeveOfficeShirt.jpg";
import LongSleeveOfficeShirtTwo from "../../../assets/images/recommendations/LongSleeveOfficeShirt 1.jpg";
import PaddedShortJacket from "../../../assets/images/recommendations/Padded short Jacket.jpg";
import PaddedShortJacketTwo from "../../../assets/images/recommendations/Padded short Jacket 1.jpg";
import ShortSleevedShirt from "../../../assets/images/recommendations/Short Sleeved Shirt.jpg";
import ShortSleevedShirtTwo from "../../../assets/images/recommendations/Short Sleeved Shirt 1.jpg";
import SlimDressLinenStyleTwo from "../../../assets/images/recommendations/Slim Dress Linen Style.jpg";
import SlimDressLinenStyle from "../../../assets/images/recommendations/Slim Dress Linen Style 1.jpg";
import StrictShortSkirt from "../../../assets/images/recommendations/Strict Short Skirt.jpg";
import StrictShortSkirtTwo from "../../../assets/images/recommendations/Strict Short Skirt 1.jpg";
import WideLegJeans from "../../../assets/images/recommendations/Wide Leg Jeans.jpg";
import WideLegJeansTwo from "../../../assets/images/recommendations/Wide Leg Jeans 1.jpg";
import WornStylishJeans from "../../../assets/images/recommendations/Worn Stylish Jeans.jpg";
import WornStylishJeansTwo from "../../../assets/images/recommendations/Worn Stylish Jeans 1.jpg";
import {
	decrementQuantity,
	incrementQuantity,
} from "../../utils/quantityutils";

const initialState = {
	recommend: [
		{
			id: 1,
			company: "UNDER ARMOR",
			image: [SlimDressLinenStyle, SlimDressLinenStyleTwo],
			currentImageIndex: 0,
			productName: "Slim dress linen style",
			lessDescription: `A dress is a garment traditionally worn by women or girls consisting of a skirt...`,
			fullDescription: `A dress is a garment traditionally worn by women or girls consisting of a skirt 
                        with an attached bodice (or a matching bodice giving the effect of a one-piece garment). 
                        It consists of a top piece that covers the torso and hangs down over the legs.`,
			price: "27",
			ProductType: "Dress",
			SKU: "W57011DG1",
			Tags: ["collection-dresses", "women"],
			Weight: "0.38 ",
			Vendor: "Under Armor",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,

			quantity: 1,
		},
		{
			id: 2,
			company: "COLVIN KLEIN",
			image: [LongCargoSkirt, LongCargoSkirtTwo],
			currentImageIndex: 0,
			productName: "Long cargo skirt",
			lessDescription: `A skirt is an item of both women's and men's waist clothing that covers the...`,
			fullDescription: `A skirt is an item of both women's and men's waist clothing that covers the lower part of the body.
                      Evolved from a loincloth. Also, the skirt is the lower part of the dress from the waist to the hem,
                      and the crop top dress consists of two parts separated from each other: a top and a skirt.`,
			price: "83",
			ProductType: "Skirt",
			SKU: "W57006CY1",
			Tags: ["collection-one-pieces", "women"],
			Weight: "0.45 ",
			Vendor: "Colvin Klein",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 3,
			company: "CANVERSE",
			image: [PaddedShortJacket, PaddedShortJacketTwo],
			currentImageIndex: 0,
			productName: "Padded short jacket",
			lessDescription: `A jacket is a garment for the upper body, usually extending below the hips...`,
			fullDescription: `A jacket is a garment for the upper body, usually extending below the hips.
                        A jacket typically has sleeves and fastens in the front or slightly on the side.
                        A jacket is generally lighter, tighter-fitting, and less insulating than a coat,
                        which is outerwear.`,
			price: "31",
			ProductType: "Jacket",
			SKU: "W57009YW1",
			Tags: ["collection-coats-jackets", "new", "women"],
			Weight: "0.86 ",
			Vendor: "Canverse",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 4,
			company: "CABIAN",
			image: [LongSleeveOfficeShirt, LongSleeveOfficeShirtTwo],
			currentImageIndex: 0,
			productName: "Long sleeve office shirt",
			lessDescription: `A shirt, also an overshirt or a classic shirt, is a productName of clothing related...`,
			fullDescription: `A shirt, also an overshirt or a classic shirt,
                        is a productName of clothing related to the outer underwear.
                        Historically, the shirt refers specifically to underwear,
                        but since the 1960s it can be worn on its own,
                        without being covered with other clothes.`,
			price: "51",
			ProductType: "Shirt",
			SKU: "M75006GY1",
			Tags: ["collection-bridal-accessories", "men"],
			Weight: "0.4 ",
			Vendor: "Cabian",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 5,
			company: "SANCARY",
			image: [ClassicDenimTrousers, ClassicDenimTrousersTwo],
			currentImageIndex: 0,
			productName: "Classic denim trousers",
			ProductType: "Trousers, slacks, or pants",
			SKU: "M75001CY1",
			Tags: ["collection - suspenders", "men"],
			Weight: "0.7 ",
			Vendor: "Saucany",
			lessDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere...`,
			fullDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere between the knees and the ankles, covering both legs separately.
                        In the United Kingdom, the word pants generally means underwear and not trousers.`,
			price: "93",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 6,
			company: "THE SOUTH FACE",
			image: [ShortSleevedShirt, ShortSleevedShirtTwo],
			currentImageIndex: 0,
			productName: "Short-sleeved shirt",
			lessDescription: `A shirt, also an overshirt or a classic shirt, is a productName of clothing related...`,
			fullDescription: `A shirt, also an overshirt or a classic shirt, is a productName of clothing related to the outer underwear.
                       Historically, the shirt refers specifically to underwear, but since the 1960s it can be worn on its own.`,
			ProductType: "Shirt",
			SKU: "M73012OR1",
			Tags: ["collection-suspenders", "men"],
			Weight: "0.3 ",
			Vendor: "The south face",
			price: "84",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 7,
			company: "SAUCANY",
			image: [StrictShortSkirt, StrictShortSkirtTwo],
			currentImageIndex: 0,
			productName: "Strict short skirt",
			lessDescription: `A skirt is an item of both women's and men's waist clothing that covers the...`,
			fullDescription: `A skirt is an item of both women's and men's waist clothing that
                        covers the lower part of the body. Evolved from a loincloth.
                        Also, the skirt is the lower part of the dress from the waist to the hem,
                        and the crop top dress consists of two parts separated from each other: a top and a skirt.`,
			price: "77",
			ProductType: "Skirt",
			SKU: "W57012GY1",
			Tags: ["collection-uniform", "women"],
			Weight: "0.3 ",
			Vendor: "Saucany",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 8,
			company: "CLORKS",
			image: [WideLegJeans, WideLegJeansTwo],
			currentImageIndex: 0,
			productName: "Wide leg jeans",
			lessDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere...`,
			fullDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere
                        between the knees and the ankles, covering both legs separately.
                        In the United Kingdom, the word pants generally means underwear and not trousers.`,
			price: "81",
			ProductType: "Trousers, slacks, or pants",
			SKU: "W57014VL1",
			Tags: ["collection-pants", "women"],
			Weight: "0.56 ",
			Vendor: "Clorks",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
		{
			id: 9,
			company: "CANVERSE",
			image: [WornStylishJeans, WornStylishJeansTwo],
			currentImageIndex: 0,
			productName: "Worn Stylish jeans",
			lessDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere...`,
			fullDescription: `Trousers, slacks, or pants are an item of clothing worn from the waist to anywhere between the knees and the ankles, covering both legs separately.
      In the United Kingdom, the word pants generally means underwear and not trousers.`,
			price: "50",
			ProductType: "Trousers, slacks, or pants",
			SKU: "M37014GY1",
			Tags: ["collection-suspenders", "men"],
			Weight: "0.8 ",
			Vendor: "Canverse",
			color: ["Black", "Blue", "White"],
			currentColorIndex: 0,
			size: ["XS", "S", "M", "L", "XL"],
			currentSizeIndex: 0,
			quantity: 1,
		},
	],
};

const recommendationSlice = createSlice({
	name: "recommendation",
	initialState,
	reducers: {
		increase(state, action) {
			incrementQuantity(state.recommend, action);
		},
		decrease(state, action) {
			decrementQuantity(state.recommend, action);
		},
		changeImageIndex(state, action) {
			const { productId, newIndex } = action.payload;
			const productToChange = state.recommend.find((p) => p?.id === productId);
			if (
				productToChange &&
				newIndex >= 0 &&
				newIndex < productToChange.image.length
			) {
				productToChange.currentImageIndex = newIndex;
			}
		},
		changeSizeIndex(state, action) {
			const { productId, newIndex } = action.payload;
			const sizeToChange = state.recommend.find((p) => p?.id === productId);
			if (
				sizeToChange &&
				newIndex >= 0 &&
				newIndex < sizeToChange.size.length
			) {
				sizeToChange.currentSizeIndex = newIndex;
			}
		},
		changeColorIndex(state, action) {
			const { productId, newIndex } = action.payload;
			const colortoChange = state.recommend.find((p) => p?.id === productId);
			if (
				colortoChange &&
				newIndex > 0 &&
				newIndex < colortoChange.color.length
			) {
				colortoChange.currentColorIndex = newIndex;
			}
		},
	},
});

export const {
	increase,
	decrease,
	changeSizeIndex,
	changeImageIndex,
	changeColorIndex,
} = recommendationSlice.actions;

export default recommendationSlice.reducer;
