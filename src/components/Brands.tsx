import { useAppSelector } from "../redux/hooks";
import { SectionHeading } from "./ui";

const Brands = () => {
	const { brands } = useAppSelector((state) => state.brands);
	return (
		<div className="container px-4">
			<SectionHeading
				title="Our Brands"
				subtitle="Advanced product filter by vendors"
			/>
			<div className="grid grid-cols-3  md:grid-cols-4 pt-8 gap-4">
				{brands.map((brand, index) => (
					<div key={index} className="bg-[#FFFF] shadow-xl overflow-hidden">
						<img
							src={brand.image}
							alt={brand.name}
							className="hover:scale-105 duration-300"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Brands;
