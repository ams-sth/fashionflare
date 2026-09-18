import Support from "../assets/icons/advertisement/24-hours-support.png";
import CreditCard from "../assets/icons/advertisement/credit-card.png";
import FreeDelivery from "../assets/icons/advertisement/free-delivery.png";
import ProductReturn from "../assets/icons/advertisement/product-return.png";
import { useAppSelector } from "../redux/hooks";
import Slider from "../utils/Slider";

const Advertisement = () => {
	const { ads } = useAppSelector((state) => state.advertisement);
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="bg-[#FFFF]">
			<Slider {...settings}>
				{ads.map((about) => (
					<div
						key={about.id}
						className="relative -top-4 bg-[#1F78F0] lg:bg-firstSlideBg bg-no-repeat bg-cover h-screen"
					>
						<div className="absolute top-[35%] right-[10%] flex flex-col gap-4 px-4 text-left">
							<h1 className="text-6xl font-bold max-w-xs text-yellow-300">
								{about.title}
							</h1>
							<p className="text-md  max-w-md text-white text-left">
								{about.description}
							</p>

							<button
								type="button"
								className="rounded-3xl bg-white w-[30%] py-2"
							>
								{about.button}
							</button>
						</div>
					</div>
				))}
			</Slider>
			<div className="container bg-[#FFFF]">
				<div className="grid grid-cols-2 ssm:grid-cols-3 sm:grid-cols-4 gap-4 px-4 py-20 md:py-8">
					<div>
						<img src={FreeDelivery} alt="Free Delivery" className="mx-auto" />
						<h1 className="font-semibold">Free Shipping</h1>
						<h1 className="text-sm">When you spend $100+</h1>
					</div>

					<div>
						<img src={ProductReturn} alt="Product Return" className="mx-auto" />
						<h1 className="font-semibold">Free Returns</h1>
						<h1 className="text-sm">Within 14 days</h1>
					</div>

					<div>
						<img src={CreditCard} alt="Secured Payments" className="mx-auto" />
						<h1 className="font-semibold"> Secured Payments </h1>
						<h1 className="text-sm ">We are officially registered</h1>
					</div>

					<div>
						<img src={Support} alt="24/7 hours support" className="mx-auto" />
						<h1 className="font-semibold">Support 24/7</h1>
						<h1 className="text-sm">Ready to help our clients</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
