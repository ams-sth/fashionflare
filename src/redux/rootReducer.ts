import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import cartReducer from "./features/cart/cartSlice";
import accessoryReducer from "./features/category/accessorySlice";
import menReducer from "./features/category/menSlice";
import womenReducer from "./features/category/womenSlice";
import advertisementReducer from "./features/landingpage/advertisementSlice";
import brandReducer from "./features/landingpage/brandSlice";
import categoryReducer from "./features/landingpage/categorySlice";
import productReducer from "./features/landingpage/productSlice";
import recommendationReducer from "./features/landingpage/recommendationSlice";
import shopReducer from "./features/landingpage/shopSlice";
import typesReducer from "./features/landingpage/typesSlice";
import blogReducer from "./features/navigationbar/blogSlice";
import faqReducer from "./features/navigationbar/faqSlice";

const storage = {
	getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
	setItem: (key: string, value: string) =>
		Promise.resolve(localStorage.setItem(key, value)),
	removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	recommendations: recommendationReducer,
	typesOfProduct: typesReducer,
	products: productReducer,
	brands: brandReducer,
	category: categoryReducer,
	shop: shopReducer,
	women: womenReducer,
	men: menReducer,
	accessory: accessoryReducer,
	advertisement: advertisementReducer,
	blogs: blogReducer,
	cart: cartReducer,
	faq: faqReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default persistedReducer;
