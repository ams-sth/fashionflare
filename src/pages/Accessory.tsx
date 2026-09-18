import React from "react";
import {
	decrement,
	increment,
} from "../redux/features/category/accessorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { showInfoToast } from "../utils/toast";

const Accessory = () => {
	const dispatch = useAppDispatch();
	const { aboutAccessories, accessories } = useAppSelector(
		(state) => state.accessory,
	);

	const handleIncrement = (product) => {
		dispatch(increment(product.id));
	};
	const handleDecrement = (product) => {
		if (product.quantity > 1) {
			dispatch(decrement(product.id));
		} else {
			showInfoToast(`Quantity can't be less than one`);
		}
	};

	return (
		<div className="container flex flex-col gap-8">
			<div className="flex flex-row bg-[#FFFF] shadow-lg">
				{aboutAccessories.map((accessory, index) => (
					<div key={index} className="py-12">
						<h1 className="text-center text-2xl font-bold">
							{accessory.title}
						</h1>
						<p className="text-gray-500 pt-4">{accessory.desc}</p>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-8">
				{accessories.map((product) => (
					<div key={product.id} className="bg-[#FFFF] rounded-xl shadow-xl">
						<div className="flex flex-row justify-between px-8 pt-4">
							<h1 className="font-bold">{product.brand}</h1>
							<h1 className="font-bold text-xl">${product.price}</h1>
						</div>
						<div className="flex flex-row gap-8">
							<img
								src={product.image}
								alt={product.title}
								className="w-[30%] h-[80%] p-4"
							/>
							<div className="flex flex-col gap-4 pt-10 px-8">
								<h1 className="pt-4 text-start font-bold">{product.title}</h1>
								<h1 className="text-left text-md text-gray-400 pt-4">
									{product.desc}
								</h1>

								<div className="flex flex-row gap-4">
									<h1 className="font-semibold">Amount: </h1>
									<button
										type="button"
										className="text-xl"
										onClick={() => handleDecrement(product)}
									>
										-
									</button>
									<h1 className="text-xl ">{product.quantity}</h1>
									<button
										type="button"
										className="text-xl"
										onClick={() => handleIncrement(product)}
									>
										+
									</button>
								</div>
								<div className="flex flex-row">
									<button
										type="button"
										className="bg-blue-500 p-2 rounded-xl text-white"
									>
										Add To Cart
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

export default Accessory;
