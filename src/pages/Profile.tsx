import { TbDoorExit } from "react-icons/tb";
import { useAppSelector } from "../redux/hooks";
import { calculateItemPrice } from "../utils/cartUtils";
import { showSuccessToast } from "../utils/toast";

const Profile = () => {
	const data = JSON.parse(localStorage.getItem("formData") || "{}");
	const { cartItems } = useAppSelector((state) => state.cart);

	const handleLogout = () => {
		localStorage.clear();
		showSuccessToast("Account SignOut Successfull");
		window.location.href = "/login";
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-3xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl font-bold">Account</h1>
					<button
						type="button"
						onClick={handleLogout}
						className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md flex items-center"
					>
						<TbDoorExit className="mr-2" />
						<span>Log Out</span>
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-2xl font-bold mb-4">Order History</h2>
						{cartItems.length === 0 ? (
							<div className="bg-gray-100 p-6 rounded-md">
								<p>You haven't placed any orders yet.</p>
							</div>
						) : (
							<div className="bg-white rounded-md shadow-md divide-y divide-gray-200">
								{cartItems.map((item) => (
									<div
										key={item.id}
										className="flex items-center p-4 hover:bg-gray-100 transition-colors duration-300"
									>
										<div className="relative w-16 h-16">
											<img
												className="w-full h-full object-cover rounded-md"
												src={item.image}
												alt={item.name}
											/>
											<span className="absolute -top-3 -right-1 bg-gray-800 text-white rounded-full px-2 py-1 text-xs">
												{item.quantity}
											</span>
										</div>
										<div className="ml-4">
											<h3 className="text-lg font-semibold">{item.name}</h3>
											<p className="text-gray-600">
												${calculateItemPrice(item)}
											</p>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					<div>
						<h2 className="text-2xl font-bold mb-4">Account Details</h2>
						<div className="bg-white rounded-md shadow-md p-6">
							<div className="flex mb-4">
								<span className="font-semibold w-32">First Name:</span>
								<span>{data.firstName}</span>
							</div>
							<div className="flex mb-4">
								<span className="font-semibold w-32">Last Name:</span>
								<span>{data.lastName}</span>
							</div>
							<div className="flex">
								<span className="font-semibold w-32">Email:</span>
								<span>{data.email}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
