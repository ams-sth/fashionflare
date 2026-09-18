import { useAppSelector } from "../redux/hooks";
import { SectionHeading } from "./ui";

const Shops = () => {
	const { shopImages } = useAppSelector((state) => state.shop);
	return (
		<div>
			<div className="container px-4 flex flex-col gap-12">
				<SectionHeading title="#@Shop By Instagram" />
				<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 mx-auto gap-6">
					{shopImages.map((shop, index) => (
						<div key={index}>
							<img src={shop.image} alt={shop.name} className="rounded-full" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shops;
