import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import product01 from "../assets/images/detail/product-01.jpg";
import product02 from "../assets/images/detail/product-02.jpg";
import {
	changeImageIndex,
	changeSizeIndex,
	decrease,
	increase,
} from "../redux/features/landingpage/recommendationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { handleAddToCart } from "../utils/cartUtils";
import { showInfoToast } from "../utils/toast";

const Details = () => {
	const { productId } = useParams();
	const { recommend } = useAppSelector((state) => state.recommendations);
	const dispatch = useAppDispatch();

	const product = recommend.find((item) => item.id === parseInt(productId));

	if (!product) {
		return <div>Product not found</div>;
	}

	const handleQuantityIncrease = () => {
		dispatch(increase(product.id));
	};
	const handleQuantityDecrease = (event) => {
		if (product.quantity > 1) {
			dispatch(decrease(product.id));
		} else {
			showInfoToast("Quantity can't be less than 1");
			event.preventDefault();
		}
	};

	const handleSizeChange = (productId, newIndex) => {
		dispatch(changeSizeIndex({ productId, newIndex }));
	};

	const handleImageChange = (productId, newIndex) => {
		dispatch(changeImageIndex({ productId, newIndex }));
	};

	return (
		<div className="container px-4">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col md:flex-row justify-between gap-12">
					<div className="flex flex-col gap-4 pt-4 justify-center">
						<img
							src={product.image[product.currentImageIndex || 0]}
							alt="Not found"
							className="rounded-2xl"
						/>
						<div className="flex flex-row gap-4 justify-center">
							{product.image.map((images, index) => (
								<div key={index} className="w-[20%]">
									<img
										src={images}
										alt="Not found"
										onClick={() => handleImageChange(product.id, index)}
										className="cursor-pointer object-contain"
										style={{
											border:
												index === (product.currentImageIndex || 0)
													? "2px solid blue"
													: "2px solid gray",
										}}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3 pt-4">
						<h1 className="font-bold text-4xl text-start">
							{product.productName}
						</h1>
						<h1 className="text-start text-2xl font-bold">$ {product.price}</h1>
						<h1 className="text-xl text-start font-semibold">
							Short description
						</h1>
						<p className="text-gray-700 text-left max-w-lg">
							{product.fullDescription}
						</p>
						<div className="flex gap-1">
							<h1 className="font-semibold">SKU:</h1>
							<h1 className="">{product.SKU}</h1>
						</div>
						<div className="flex gap-1">
							<h1 className="font-semibold">Weight: </h1>
							<h1>{product.Weight}</h1>
						</div>
						<div className="flex gap-1">
							<h1 className="font-semibold">Vendor:</h1>
							<h1>{product.Vendor}</h1>
						</div>
						<div className="flex flex-row gap-2">
							<label className="font-semibold">Color: </label>
							<select className="border border-black rounded-md">
								{product.color.map((color, index) => (
									<option key={index} value={color}>
										{color}
									</option>
								))}
							</select>
						</div>
						<div className="flex flex-wrap items-center gap-2">
							<h1 className="text-start font-semibold">Size:</h1>
							{product.size.map((size, index) => (
								<div
									key={index}
									className="border-2 px-2 rounded-md cursor-pointer"
									onClick={() => handleSizeChange(product.id, index)}
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
						<div className="flex flex-row gap-1 items-center">
							<h1 className="text-start font-semibold">Quantity:</h1>
							<div className="flex flex-row items-center">
								<button
									type="button"
									className={`text-white bg-blue-500 rounded-full p-1
                      ${
												product.quantity <= 1
													? "disabled bg-gray-500 text-gray-700"
													: ""
											}`}
									onClick={(e) => handleQuantityDecrease(e)}
								>
									<FaMinus />
								</button>
								<span className="px-2 text-xl text-gray-900">
									{product.quantity}
								</span>
								<button
									type="button"
									className="text-white hover:text-blue-700 bg-blue-500 rounded-full p-1"
									onClick={handleQuantityIncrease}
								>
									<FaPlus />
								</button>
							</div>
						</div>
						<button
							type="button"
							onClick={() => handleAddToCart(product, dispatch)}
							className="text-center bg-blue-500 w-[40%] p-2 rounded-xl text-white font-semibold"
						>
							Add to Cart
						</button>
					</div>
				</div>

				<h1 className="text-start text-xl font-semibold">Description</h1>
				<div className="flex flex-col md:flex-row gap-4">
					<div className="md:w-[50%]">
						<img src={product01} alt="Img-01" className="h-full" />
					</div>
					<div className="flex flex-col gap-12 md:w-[50%]">
						<p className="text-start">
							There are many benefits to shopping at an online store, including
							the ability to find a wide variety of items, the ability to
							compare prices easily, and the ability to have items shipped
							directly to your doorstep.
						</p>
						<p className="text-start">
							With countless online stores offering a wide selection of
							variously styled clothes and accessories, it's easier to find the
							perfect collection for you. Not only do these stores offer great
							prices, but they also have up-to-date information on the latest
							trends in fashion. If you're looking for the new outfit, there are
							several things you should consider when shopping for clothes
							online. Different clothing styles will look better on some people
							than others. Additionally, it's important to keep up with current
							trends to make sure your wardrobe stays in style.
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex flex-col gap-12 md:w-[50%]">
						<p className="text-start">
							Featuring the latest trends in fashion and accessories, our new
							arrivals are sure to get you excited for the warmer months ahead.
							From sundresses and caps to swimwear and sandals, we have
							everything you need to update your wardrobe for spring and summer.
							Whether you're looking for a new tote to carry all your beach
							essentials or some statement jewelry to dress up your favorite
							outfit, we've got you covered. Start shopping our new collection
							now and find your perfect spring and summer style!
						</p>
						<p className="text-start">
							If you're looking for the latest fashion trends, you'll definitely
							want to check out our online store! We've got a great selection of
							clothes and accessories that will help you stay up-to-date with
							the latest styles.
						</p>
					</div>
					<div className="md:w-[50%] ">
						<img src={product02} alt="Img-02" className="h-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
