import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../assets/images/authentication/authentication.jpg";
import { FieldError, FieldLabel } from "../components/ui";
import { showErrorToast, showSuccessToast } from "../utils/toast";
import { validateLoginForm } from "../utils/validationUtils";

const Login = () => {
	const Navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const [errors, setErrors] = useState<Record<string, string>>({});

	const [formData, setFormData] = useState({
		email: localStorage.getItem("email") || "",
		password: localStorage.getItem("password") || "",
	});

	const handleInputChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const { errors: validationErrors, isValid } = validateLoginForm(formData);
		setErrors(validationErrors);
		if (isValid) {
			const storedData = localStorage.getItem("formData");
			if (storedData) {
				const userData = JSON.parse(storedData);
				if (
					userData.email === formData.email &&
					userData.password === formData.password
				) {
					showSuccessToast("Login Successful");
					Navigate("/profile");
				} else {
					showErrorToast("Invalid email or password");
				}
			} else {
				showErrorToast("No registration data found in localStorage");
			}
		}
	};

	return (
		<div className="container px-4">
			<div className="flex flex-row">
				<div className="hidden md:flex md:flex-1">
					<img src={login} alt="Login" className="rounded-l-xl" />
				</div>
				<div className="flex-1 bg-[#F7F8FC] items-center rounded-r-xl p-12">
					<h1 className="text-6xl font-bold ">Welcome</h1>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col gap-2">
								<FieldLabel>Email</FieldLabel>
								<input
									name="email"
									value={formData.email}
									type="email"
									onChange={handleInputChange}
									className="border-b-2 p-3 rounded-t-xl "
									placeholder="Enter your E-mail here"
								/>
								{errors.email && <FieldError>{errors.email}</FieldError>}
							</div>
							<div className="flex flex-col gap-2 relative">
								<FieldLabel>Password</FieldLabel>
								<div className="flex items-center">
									<input
										name="password"
										value={formData.password}
										type={showPassword ? "text" : "password"}
										onChange={handleInputChange}
										className="border-b-2 p-3 rounded-t-xl w-full"
										placeholder="Enter your Password here"
									/>
									{showPassword ? (
										<FaEye
											className="absolute right-3 cursor-pointer"
											onClick={() => setShowPassword(!showPassword)}
										/>
									) : (
										<FaEyeSlash
											className="absolute right-3 cursor-pointer"
											onClick={() => setShowPassword(!showPassword)}
										/>
									)}
								</div>
								{errors.password && <FieldError>{errors.password}</FieldError>}
							</div>
							<button
								type="submit"
								className="bg-blue-700 hover:bg-blue-900 text-white font-bold w-40 h-12 rounded-xl"
							>
								Login
							</button>
						</div>
					</form>
					<div className="flex flex-col md:flex-row gap-1 justify-center p-3">
						<h1>Don't have an account ?</h1>
						<NavLink to="/register" className="text-blue-500">
							Register Here
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
