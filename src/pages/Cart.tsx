import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
	decrease,
	increase,
	removefromcart,
} from "../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { calculateItemPrice } from "../utils/cartUtils";
import { showInfoToast } from "../utils/toast";

const Cart = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const handleDelete = (id) => {
		dispatch(removefromcart(id));
	};

	const handleIncrease = (item) => {
		dispatch(increase(item));
	};

	const handleDecrease = (item, event) => {
		if (item.quantity > 1) {
			dispatch(decrease(item));
		} else {
			showInfoToast("Quantity cant be less than one");
			event.preventDefault();
		}
	};

	return (
		<div className="container p-4">
			<h1 className="text-2xl font-bold text-start py-4">Your Cart</h1>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:w-[70%]">
					{cartItems.length === 0 ? (
						<div className="mb-4">
							<p className="text-lg font-semibold text-gray-600 mb-4">
								Your cart is empty
							</p>
							<p>Looks like you haven't added any products to your cart yet.</p>
						</div>
					) : (
						<div className="md:flex flex-col gap-2">
							{/* <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center font-semibold text-gray-900">
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Product
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Product Name
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Actual Price
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Quantity
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Unit Quantity
                </p>
                <p className="hidden md:block px-2 text-sm lg:text-md">
                  Action
                </p>
              </div> */}
							{cartItems.map((item) => (
								<div
									key={item.id}
									className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 items-center pb-2 md:pb-0 border-t"
								>
									<div className="p-4 mx-auto md:mx-0 order-1 md:order-none">
										<img
											className="object-cover w-32 rounded-xl"
											src={item.image}
											alt={item.name}
										/>
									</div>

									<div className=" order-2 md:order-none">
										<h1 className="text-sm">{item.name}</h1>
										<h1 className="text-sm text-gray-500">Size:{item.size}</h1>
									</div>

									<div className="order-4 md:order-none">
										<span className=" lg:text-xl text-gray-900">
											${item.price}
										</span>
									</div>

									<div className="order-5 md:order-none">
										<button
											type="button"
											className={`text-white bg-blue-500 rounded-full p-0.5 lg:p-1
                    ${
											item.quantity <= 1
												? "disabled bg-gray-500 text-gray-700"
												: ""
										}
                  `}
											onClick={(e) => handleDecrease(item, e)}
										>
											<FaMinus />
										</button>
										<span className="px-2 lg:text-xl text-gray-900">
											{item.quantity}
										</span>
										<button
											type="button"
											className="text-white hover:text-blue-700 bg-blue-500 rounded-full p-0.5 lg:p-1"
											onClick={() => handleIncrease(item)}
										>
											<FaPlus />
										</button>
									</div>

									<div className="order-6 md:order-none">
										<span className="lg:text-xl">
											${calculateItemPrice(item)}
										</span>
									</div>

									<div className=" order-3 md:order-none">
										<button
											type="button"
											onClick={() => handleDelete(item.id)}
											className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
										>
											<MdDelete />
										</button>
									</div>
								</div>
							))}
						</div>
					)}
					<div className="hidden md:flex justify-center mb-4 lg:mb-0">
						<NavLink
							to="/"
							className="flex justify-center p-2 items-center bg-blue-700 hover:bg-blue-800 text-white rounded-xl"
						>
							Go to Shopping
						</NavLink>
					</div>
				</div>

				<div className="bg-[#FFFFFF] rounded-xl flex flex-col gap-2 p-4 lg:w-[30%] lg:h-fit justify-center">
					<h1 className="font-semibold text-xl text-start">Your Order</h1>
					<p className="text-left">
						Tax included and shipping calculated at checkout
					</p>
					<div className="flex justify-between text-2xl font-semibold">
						<span className="">SUB TOTAL: </span>
						<span>
							$
							{cartItems.reduce(
								(total, item) => total + item.price * item.quantity,
								0,
							)}
						</span>
					</div>
					<NavLink
						to="/checkout"
						className={`bg-blue-600 right-0 text-white w-full p-2 rounded-xl text-center font-semibold
          ${cartItems.length === 0 ? "disabled bg-gray-500 text-gray-700" : ""}
        `}
						onClick={(e) => {
							if (cartItems.length === 0) {
								e.preventDefault();
								showInfoToast("Your Cart is Empty");
							}
						}}
					>
						Checkout
					</NavLink>
					<NavLink
						to="/"
						className="block md:hidden bg-blue-600 hover:bg-blue-800 text-white rounded-xl p-2"
					>
						Go to Shopping
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Cart;
