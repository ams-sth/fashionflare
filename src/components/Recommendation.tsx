// import Slider from "react-slick";

import { useNavigate } from "react-router-dom";
import { changeImageIndex } from "../redux/features/landingpage/recommendationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { SectionHeading } from "./ui";

const Recommendation = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { recommend } = useAppSelector((state) => state.recommendations);

	const handleImageChange = (imageId, newIndex) => {
		dispatch(changeImageIndex({ productId: imageId, newIndex }));
	};

	const handleSeeMore = (productId) => {
		navigate(`/details/${productId}`);
	};

	return (
		<div className="px-4">
			<SectionHeading
				title="Recommended For You"
				subtitle="The number of goods in stock is limited"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 gap-12">
				{recommend.map((items) => (
					<div className="shadow-sm rounded-2xl bg-[#FFFF]" key={items.id}>
						<h1 className="font-bold text-gray-800 text-xs text-start ml-4 translate-y-[1rem]">
							{items.company}
						</h1>
						<div className="flex flex-row px-4 py-6">
							<div className="w-fit">
								<img
									src={items.image[items.currentImageIndex || 0]}
									alt="Not found"
									className="rounded-xl w-full"
								/>
								<div className="flex flex-row gap-4 pt-4 justify-center">
									{items.image.map((images, index) => (
										<div key={index} className="w-[20%]">
											<img
												src={images}
												alt="Not found"
												onClick={() => handleImageChange(items.id, index)}
												className="cursor-pointer object-contain"
												style={{
													border:
														index === (items.currentImageIndex || 0)
															? "2px solid blue"
															: "2px solid gray",
												}}
											/>
										</div>
									))}
								</div>
							</div>
							<div className=" flex flex-col gap-2 px-2">
								<p className="font-bold text-xl text-start text-gray-700">
									{items.productName}
								</p>
								<div className="flex flex-col">
									<p className="max-w-lg text-md text-left text-gray-500">
										{items.lessDescription}
									</p>
								</div>
								<div className="flex gap-1">
									<h1 className="text-sm font-semibold translate-y-2">$</h1>
									<h1 className="font-semibold text-2xl">{items.price}</h1>
								</div>
								<button
									type="button"
									onClick={() => handleSeeMore(items.id)}
									className="maxw-w-xl text-sm text-left text-blue-500 hover:text-blue-700 hover:underline"
								>
									Go to Detail Page
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recommendation;
