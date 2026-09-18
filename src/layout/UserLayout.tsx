import type { ReactNode } from "react";
import logoBlack from "../assets/images/logo/logo black.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const UserLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex flex-col gap-12 bg-[#F7F8FC]">
			<Navbar
				bg="#FFFF"
				logo={logoBlack}
				shadow="0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)"
			/>
			<div className="mt-[6rem] ">{children}</div>
			<Footer />
		</div>
	);
};

export default UserLayout;
