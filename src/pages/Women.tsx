import React from "react";
import { decrement, increment } from "../redux/features/category/womenSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { showInfoToast } from "../utils/toast";

const Women = () => {
	const { women, womenClothes } = useAppSelector((state) => state.women);

	const dispatch = useAppDispatch();

	const handleIncrement = (clothes) => {
		dispatch(increment(clothes.id));
	};
	const handleDecrement = (clothes) => {
		if (clothes.quantity > 1) {
			dispatch(decrement(clothes.id));
		} else {
			showInfoToast(`Quantity Can't be less than 1`);
		}
	};

	return (
		<div className="container flex flex-col gap-8">
			<div className="overflow-hidden">
				{women.map((women, index) => (
					<div key={index}>
						<img
							src={women.image}
							alt={women.title}
							className="rounded-xl hover:scale-105 duration-300"
						/>
						<h1 className="text-white font-semibold text-4xl -translate-y-[500%] translate-x-[20%]">
							{women.title}
						</h1>

						<h1 className="font-bold text-xl">{women.title}</h1>

						<p>{women.description}</p>
					</div>
				))}
			</div>

			<div className="flex flex-col gap-8">
				{womenClothes.map((clothes) => (
					<div key={clothes.id} className="bg-[#FFFF] rounded-xl shadow-xl">
						<div className="flex flex-row justify-between p-4">
							<h1 className="font-bold">{clothes.brand}</h1>
							<h1 className="font-bold text-xl">{clothes.price}</h1>
						</div>
						<div className="flex flex-col md:flex-row">
							<img
								src={clothes.image}
								alt={clothes.title}
								className="p-4 md:w-[30%] md:h-[80%]"
							/>
							<div className="flex flex-col px-8">
								<h1 className="pt-4 text-start font-bold">{clothes.title}</h1>
								<h1 className="text-left text-md text-gray-400 pt-4">
									{clothes.desc}
								</h1>
								<div className="flex flex-row gap-6 pt-4">
									<div className="flex flex-row gap-2">
										<label className="font-semibold">Color:</label>
										<select
											className="border border-black rounded-md"
											defaultValue={clothes.color[0]}
										>
											{clothes.color.map((color, index) => (
												<option key={index} value={color}>
													{color}
												</option>
											))}
										</select>
									</div>
									<div className="flex flex-row gap-2">
										<label className="font-semibold">Size:</label>
										<select className="border border-black rounded-md">
											{clothes.sizes.map((sizes) => (
												<option value={sizes}>{sizes}</option>
											))}
										</select>
									</div>
								</div>
								<div className="flex flex-row justify-start gap-4 pt-4">
									<h1 className="font-semibold">Amount : </h1>
									<button
										type="button"
										className="text-xl font-bold"
										onClick={() => handleDecrement(clothes)}
									>
										-
									</button>
									<h1 className="text-xl ">{clothes.quantity}</h1>
									<button
										type="button"
										className="text-xl font-bold"
										onClick={() => handleIncrement(clothes)}
									>
										+
									</button>
								</div>
								<div className="flex justify-start py-4">
									<button
										type="button"
										className="bg-blue-500 hover:bg-blue-900 p-2 rounded-xl text-white"
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

export default Women;
