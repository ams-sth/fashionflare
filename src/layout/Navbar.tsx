import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiCrossShield, GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface NavbarProps {
	logo: string;
	bg: string;
	shadow: string;
	textColor?: string;
}

const Navbar = ({ logo, bg, shadow, textColor }: NavbarProps) => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const [showMenu, setShowMenu] = useState(false);
	const isLoggedIn = !!localStorage.getItem("formData");

	const totalCartQuantity = cartItems.reduce(
		(acc, item) => acc + item.quantity,
		0,
	);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const getNavLinkClassName = (navData) => {
		return navData.isActive
			? "m-2 mb-0 border-b-2 border-black pb-2"
			: "m-2 mb-0";
	};

	const handleClose = () => {
		setShowMenu(false);
	};

	const navLinks = [
		{ to: "/", text: "Home" },
		{ to: "/about", text: "About" },
		{ to: "/faq", text: "FAQ" },
		{ to: "/blogs", text: "Blogs" },
		{ to: "/contact", text: "Contact" },
	];

	return (
		<div
			className={`fixed w-[100%] z-[30]`}
			style={{
				background: bg,
				color: textColor,
				boxShadow: shadow,
				backdropFilter: "blur(10px)",
			}}
		>
			<div className="container px-4 top-0">
				<div className="flex flex-row justify-between h-[4rem] items-center">
					<div>
						<img src={logo} alt="Logo" />
					</div>
					<div className="flex flex-row items-center">
						<div
							className={`hidden md:flex md:items-center md:w-auto w-full ${
								showMenu ? "hidden" : "block"
							}`}
						>
							<div className="flex flex-row gap-8">
								{navLinks.map((link, index) => (
									<NavLink
										key={index}
										to={link.to}
										className={getNavLinkClassName}
									>
										{link.text}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className="md:w-auto w-full flex flex-row justify-end items-center gap-3">
						<FaSearch className="cursor-pointer" />
						<NavLink to="/cart">
							<div className="relative">
								<FaCartShopping className="cursor-pointer" />
								{totalCartQuantity > 0 && (
									<span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
										{totalCartQuantity}
									</span>
								)}
							</div>
						</NavLink>
						{isLoggedIn ? (
							<NavLink to="/profile">
								<CgProfile className="cursor-pointer" />
							</NavLink>
						) : (
							<NavLink to="/login">
								<CgProfile className="cursor-pointer" />
							</NavLink>
						)}
						<NavLink to="/dashboard">
							<MdDashboard />
						</NavLink>
						<button
							className="md:hidden focus:outline-none"
							type="button"
							onClick={toggleMenu}
						>
							{showMenu ? <GiCrossShield /> : <GiHamburgerMenu />}
						</button>
					</div>
					<div
						className={`md:hidden absolute top-0 left-0 w-full bg-[#1F78F0] z-30 transition-all duration-300 ease-in-out ${
							showMenu ? "block" : "hidden"
						}`}
					>
						<div className="flex flex-col items-center">
							<div className="absolute right-2 top-2">
								<IoMdClose
									onClick={() => {
										handleClose();
									}}
								/>
							</div>
							{navLinks.map((link, index) => (
								<NavLink
									key={index}
									to={link.to}
									className={getNavLinkClassName}
									onClick={toggleMenu}
								>
									{link.text}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
