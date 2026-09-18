import { FaMinus, FaPlus } from "react-icons/fa";
import {
	changeImage,
	changeSize,
	decrease,
	increase,
	setProductRating,
} from "../redux/features/landingpage/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { handleAddToCart } from "../utils/cartUtils";
import ReactStars from "../utils/ReactStars";
import { showInfoToast } from "../utils/toast";
import { SectionHeading } from "./ui";

const Products = () => {
	const { products } = useAppSelector((state) => state.products);
	const dispatch = useAppDispatch();

	const handleIncrease = (product) => {
		dispatch(increase(product.id));
	};
	const handleDecrease = (product, event) => {
		if (product.quantity > 1) {
			dispatch(decrease(product.id));
		} else {
			showInfoToast(`Quantity can't be less than 1`);
			event.preventDefault();
		}
	};
	const handleImageChange = (productId, newIndex) => {
		dispatch(changeImage({ productId, newIndex }));
	};
	const handleRatingChange = (productId, rating) => {
		dispatch(setProductRating({ productId, rating }));
	};
	const handleSizeChange = (productId, newIndex) => {
		dispatch(changeSize({ productId, newIndex }));
	};

	return (
		<div className="container px-4">
			<SectionHeading
				title="Check out products of the day"
				subtitle="Admin panel allows you to add, delete, edit subtitles"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8 gap-4">
				{products.map((product) => (
					<div
						key={product.id}
						className="lg:flex flex-col rounded-2xl bg-[#FFFF] shadow-lg overflow-hidden"
					>
						<div className="p-4">
							<div className="flex flex-row justify-between">
								<h1 className="font-bold text-xs">{product.company}</h1>
								<div className="flex gap-1 translate-y-[-0.5rem]">
									<h1 className="translate-y-[0.4rem]">$</h1>
									<h1 className="font-semibold text-2xl">{product.price}.00</h1>
								</div>
							</div>
							<img
								src={product.image[product.currentImageIndex || 0]}
								alt="Not found"
								className="h-[70%] object-cover rounded-xl"
							/>
							<div className="bg-[#FFFF] translate-y-0 lg:hover:-translate-y-[55%] xl:hover:-translate-y-[50%]  duration-500">
								<div className="flex gap-2 pt-4 overflow-x-auto">
									{product.image.map((images, index) => (
										<img
											key={index}
											src={images}
											alt="Not found"
											onClick={() => handleImageChange(product.id, index)}
											className="cursor-pointer w-[25%]"
											style={{
												border:
													index === (product.currentImageIndex || 0)
														? "2px solid blue"
														: "2px solid gray",
											}}
										/>
									))}
								</div>
								<h1 className="pt-4">{product.name}</h1>
								<div className="pt-2 mx-auto flex justify-center">
									<ReactStars
										count={5}
										size={24}
										half={true}
										color1={"#333"}
										color2={"#f4c10f"}
										edit={true}
										onChange={(newRating) =>
											handleRatingChange(product.id, newRating)
										}
										value={product.rating}
									/>
								</div>
								<div className="flex flex-wrap gap-2 py-2 justify-center">
									{product.size.map((size, index) => (
										<div
											key={index}
											className="border-2 px-2 rounded-md cursor-pointer"
											onClick={() => {
												handleSizeChange(product.id, index);
											}}
											style={{
												border:
													index === (product.currentSizeIndex || 0)
														? "2px solid blue"
														: "2px solid gray",
											}}
										>
											{size}
										</div>
									))}
								</div>
								<div className="flex flex-row items-center justify-center pt-4">
									<button
										type="button"
										className={`text-white bg-blue-500 rounded-full p-1
                      ${
												product.quantity <= 1
													? "disabled bg-gray-500 text-gray-700"
													: ""
											}`}
										onClick={(e) => handleDecrease(product, e)}
									>
										<FaMinus />
									</button>
									<span className="px-2 text-xl text-gray-900">
										{product.quantity}
									</span>
									<button
										type="button"
										className="text-white hover:text-blue-700 bg-blue-500 rounded-full p-1"
										onClick={() => handleIncrease(product)}
									>
										<FaPlus />
									</button>
								</div>
								<div className="flex justify-center py-4">
									<button
										type="button"
										onClick={() => handleAddToCart(product, dispatch)}
										className={`bg-blue-600 hover:bg-blue-950 py-2 w-[90%] rounded-xl font-bold text-white`}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
