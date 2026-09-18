import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactUs = () => {
	return (
		<div className="container px-4">
			<div className="flex flex-col lg:flex-row justify-between gap-8">
				<div className="flex-1">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6048.9120110556!2d-74.001204!3d40.707977!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2355a4b96f%3A0xfb2676ee3604a0ff!2s254%20Front%20Street!5e0!3m2!1sen!2snp!4v1713964037551!5m2!1sen!2snp"
						width="100%"
						height="450"
						allowFullScreen
						style={{ borderRadius: "20px" }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div className="flex flex-wrap justify-center gap-4 pt-4">
						<div className="flex flex-col">
							<IoLocationOutline size={48} className="mx-auto" />
							<h1 className="text-center text-xl font-semibold">Location:</h1>
							<p className="text-center">165th St, Jamaica, NY 11</p>
						</div>
						<div className="flex flex-col">
							<TfiEmail size={48} className="mx-auto" />
							<h1 className="text-center text-xl font-semibold">Email:</h1>
							<p className="text-center">loremipsum@gmail.com</p>
						</div>
						<div className="flex flex-col">
							<CiPhone size={48} className="mx-auto" />
							<h1 className="text-center text-xl font-semibold">Phone:</h1>
							<p className="text-center">+1-202-555-0158</p>
						</div>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col items-start gap-3">
						<h1 className="text-2xl font-bold">Let’s Talk</h1>
						<p className="text-left max-w-md text-gray-500">
							To request a quote our products, contact us directly or fill out
							the form and we will get back to you promptly.
						</p>
						<h1>Name</h1>
						<input
							className="w-full border-b border-gray-200 bg-[#F7F8FC]"
							placeholder="Enter your Name Here"
						/>
						<h1>Email</h1>
						<input
							className="w-full border-b border-gray-200 bg-[#F7F8FC]"
							placeholder="Enter your Email Here"
						/>
						<h1>Phone number</h1>
						<input
							className="w-full border-b border-gray-200 bg-[#F7F8FC]"
							placeholder="Phone number"
						/>
						<h1>Comment</h1>
						<input
							className="w-full border-b border-gray-200 bg-[#F7F8FC]"
							placeholder="Comment"
						/>
						<button
							type="button"
							className="bg-blue-600 hover:bg-blue-900 rounded-2xl px-12 py-3 text-white font-semibold"
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
