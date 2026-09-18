import React, { useState } from "react";
import { FieldError, FormInput } from "../components/ui";
import { useAppSelector } from "../redux/hooks";
import { calculateItemPrice } from "../utils/cartUtils";
import { showSuccessToast } from "../utils/toast";
import { ValidateCheckoutForm } from "../utils/validationUtils";

const Checkout = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const [formData] = useState({
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
		cardNumber: "",
		expirationDate: "",
		securityCode: "",
		cardName: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const { errors: validationErrors, isValid } =
			ValidateCheckoutForm(formData);
		setErrors(validationErrors);
		if (isValid) {
			localStorage.setItem("formData", JSON.stringify(formData));
			showSuccessToast("Payment Successful");
		}
	};
	return (
		<div className="container px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<form onSubmit={handleSubmit} className="w-full">
					<div className="flex flex-col gap-4">
						<FormInput placeholder="Email" />
						{errors.email && <FieldError>{errors.email}</FieldError>}
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
							<FormInput fullWidth placeholder="First name" />
							<FormInput fullWidth placeholder="Last name" />
						</div>
						<FormInput placeholder="Address" />
						{errors.address && <FieldError>{errors.address}</FieldError>}
						<div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
							<FormInput fullWidth placeholder="City" />
							<FormInput fullWidth placeholder="State" />
							<FormInput fullWidth placeholder="Zip Code" />
						</div>
						<div className="bg-[#F4F4F4] p-4 flex flex-col gap-4">
							<FormInput placeholder="Card Number" />
							{errors.cardNumber && (
								<FieldError>{errors.cardNumber}</FieldError>
							)}
							<div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
								<FormInput fullWidth placeholder="Expiration Date(MM / YY)" />
								<FormInput fullWidth placeholder="Security Code" />
							</div>
							<FormInput placeholder="Name on card" />
							{errors.cardName && <FieldError>{errors.cardName}</FieldError>}
						</div>
						<button
							type="submit"
							className="rounded-lg p-4 bg-blue-600 hover:bg-blue-800 text-white w-full"
						>
							Pay Now
						</button>
					</div>
				</form>

				<div className="border-2 p-4 flex flex-col gap-8">
					{cartItems.length === 0 ? (
						<p className="text-gray-500">Your cart is empty.</p>
					) : (
						cartItems.map((item) => (
							<div
								key={item.id}
								className="flex flex-row items-center gap-4 py-2 border-b-2 border-gray-200"
							>
								<div className="relative h-20 w-20">
									<img
										className="object-cover w-20 h-20 rounded-xl"
										src={item.image}
										alt={item.name}
									/>
									<div className="absolute -right-2 -top-2 w-7 h-7 rounded-full bg-black text-white flex justify-center items-center">
										{item.quantity}
									</div>
								</div>
								<div className="flex-1">
									<h2 className="text-lg text-gray-900">{item.name}</h2>
								</div>
								<span className="text-xl font-semibold">
									${calculateItemPrice(item)}
								</span>
							</div>
						))
					)}
					<div className="flex justify-end gap-1 items-center">
						<span className="font-semibold text-lg">Total:</span>
						<span className="text-xl font-bold">
							$
							{cartItems.reduce(
								(total, item) => total + item.price * item.quantity,
								0,
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
