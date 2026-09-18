import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";

const Footer = () => {
	return (
		<div className="bg-[#0067FF] px-4">
			<div className="py-8 container flex flex-col gap-8">
				<div className="flex flex-col items-center">
					<h1 className="text-3xl max-w-md text-white font-semibold">
						Do you want to be among the first to know about sale time?
					</h1>

					<div className="pt-8 flex flex-row">
						<span>
							<input
								type="email"
								className="rounded-3xl w-full px-8 py-3"
								placeholder="Enter your email here"
							/>
						</span>
						<span className="">
							<button
								type="button"
								className="text-white bg-black rounded-3xl px-8 py-3 -ml-10"
							>
								Subscribe
							</button>
						</span>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
					<div>
						<img src={logo} alt="logo" />
						<p className="text-md max-w-xs text-white text-start pt-4">
							Worldwide fashion store with wide collection of styles with over
							100 international fashion brands.
						</p>
						<div className="flex flex-row gap-4 pt-4">
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram size={32} className="text-white" />
							</a>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebook size={32} className="text-white" />
							</a>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaYoutube size={32} className="text-white" />
							</a>
						</div>
					</div>
					<div className="flex flex-col text-start gap-4">
						<h1 className="text-white font-semibold">QUICK LINKS</h1>
						<NavLink to="/about" className="text-white">
							About us
						</NavLink>
						<NavLink to="/blogs" className="text-white">
							Blogs
						</NavLink>
						<NavLink to="/faq" className="text-white">
							FAQ
						</NavLink>
					</div>
					<div className="border-b-2 md:border-none"></div>
					<div className="flex flex-col text-start gap-4">
						<h1 className=" text-white font-semibold">CONTACTS</h1>
						<h1 className="text-white"> Phone: +1-202-555-0158</h1>
						<h1 className="text-white">Email: loremipsum@gmail.com</h1>
						<h1 className="text-white ">Address: 165th St, Jamaica, NY 11</h1>
					</div>
				</div>
				<div className="px-4">
					<p className="text-white pt-12">
						© 2024, Lumia Theme Powered by Bigsteps
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
