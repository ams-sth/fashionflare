import React from "react";
import logoWhite from "../assets/images/logo/logo.svg";
import Advertisement from "../components/Advertisement";
import Brands from "../components/Brands";
import Category from "../components/Category";
import Lookbook from "../components/Lookbook";
import Products from "../components/Products";
import Recommendation from "../components/Recommendation";
import Reviews from "../components/Reviews";
import Search from "../components/Search";
import Shops from "../components/Shops";
import Types from "../components/Types";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const Home = () => {
	return (
		<div className="flex flex-col gap-40 bg-[#F7F8FC]">
			<Navbar
				bg="#1F78F0"
				logo={logoWhite}
				textColor="white"
				shadow="shadow-none"
			/>
			<Advertisement />
			<Types />
			<Products />
			<Search />
			<Recommendation />
			<Category />
			<Brands />
			<Lookbook />
			<Reviews />
			<Shops />
			<Footer />
		</div>
	);
};

export default Home;
