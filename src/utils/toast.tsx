import { Link } from "react-router-dom";
import { type ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions: ToastOptions = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	theme: "colored",
};

export const showSuccessToast = (message: string) => {
	toast.success(message, toastOptions);
};

export const showErrorToast = (message: string) => {
	toast.error(message, toastOptions);
};

export const showInfoToast = (message: string) => {
	toast.info(message, toastOptions);
};

export const showInfoToastWithLink = (message?: string) => {
	toast.info(
		<>
			{message} <Link to="/cart">Go to Cart</Link>
		</>,
		{
			hideProgressBar: true,
			closeOnClick: true,
		},
	);
};
