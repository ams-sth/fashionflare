import "./styles/App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserLayout from "./layout/UserLayout";
import AboutUs from "./pages/AboutUs";
import Accessory from "./pages/Accessory";
import Articles from "./pages/Articles";
import Blogs from "./pages/Blogs";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Men from "./pages/Men";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Women from "./pages/Women";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

const App = () => {
	return (
		<div className="App">
			<ScrollToTop />
			<ToastContainer />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/details/:productId"
					element={
						<UserLayout>
							<Details />
						</UserLayout>
					}
				/>
				<Route
					path="/about"
					element={
						<UserLayout>
							<AboutUs />
						</UserLayout>
					}
				/>
				<Route
					path="/login"
					element={
						<UserLayout>
							<Login />
						</UserLayout>
					}
				/>
				<Route
					path="/profile"
					element={
						<UserLayout>
							<Profile />
						</UserLayout>
					}
				/>
				<Route
					path="/register"
					element={
						<UserLayout>
							<Register />
						</UserLayout>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<UserLayout>
							<Dashboard />
						</UserLayout>
					}
				/>
				<Route
					path="/contact"
					element={
						<UserLayout>
							<ContactUs />
						</UserLayout>
					}
				/>
				<Route
					path="/faq"
					element={
						<UserLayout>
							<FAQ />
						</UserLayout>
					}
				/>
				<Route
					path="/blogs"
					element={
						<UserLayout>
							<Blogs />
						</UserLayout>
					}
				/>
				<Route
					path="/article/:blogId"
					element={
						<UserLayout>
							<Articles />
						</UserLayout>
					}
				/>
				<Route
					path="/women"
					element={
						<UserLayout>
							<Women />
						</UserLayout>
					}
				/>
				<Route
					path="/men"
					element={
						<UserLayout>
							<Men />
						</UserLayout>
					}
				/>
				<Route
					path="/accessories"
					element={
						<UserLayout>
							<Accessory />
						</UserLayout>
					}
				/>
				<Route
					path="/cart"
					element={
						<UserLayout>
							<Cart />
						</UserLayout>
					}
				/>
				<Route
					path="/checkout"
					element={
						<UserLayout>
							<Checkout />
						</UserLayout>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
