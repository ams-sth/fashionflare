import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

const FAQ = () => {
	const [activeSection, setActiveSection] = useState("AboutShopify");
	const { AboutShopify, PrePurchase, LumiaFeatures, Support } = useAppSelector(
		(state) => state.faq,
	);

	const handleButtonClick = (section) => {
		setActiveSection(section);
	};

	const getButtonClassName = (buttonName) => {
		return `px-6 py-2 hover:bg-blue-700 hover:text-white rounded-xl font-semibold ${
			activeSection === buttonName ? "bg-blue-700 text-white" : ""
		}`;
	};

	return (
		<div className="container px-4">
			<h1 className="text-2xl font-bold mb-8">Have a Question ? Look here</h1>
			<div className="md:flex justify-center md:justify-between gap-8">
				<div className="flex flex-wrap md:flex-col gap-2 mb-8">
					<button
						type="button"
						className={getButtonClassName("AboutShopify")}
						onClick={() => handleButtonClick("AboutShopify")}
					>
						ABOUT SHOPIFY
					</button>
					<button
						type="button"
						className={getButtonClassName("PrePurchase")}
						onClick={() => handleButtonClick("PrePurchase")}
					>
						PRE-PURCHASE
					</button>
					<button
						type="button"
						className={getButtonClassName("LumiaFeatures")}
						onClick={() => handleButtonClick("LumiaFeatures")}
					>
						LUMIA FEATURES
					</button>
					<button
						type="button"
						className={getButtonClassName("Support")}
						onClick={() => handleButtonClick("Support")}
					>
						SUPPORT
					</button>
				</div>
				<div className="flex-1">
					{activeSection === "AboutShopify" && (
						<div className="flex flex-col justify-center gap-4 ">
							{AboutShopify.map((faq) => (
								<div key={faq.id} className="flex flex-col gap-2 text-start">
									<h3 className="font-bold text-xl">{faq.question}</h3>
									{faq.answer.map((answer, index) => (
										<p key={index}>{answer}</p>
									))}
								</div>
							))}
						</div>
					)}
					{activeSection === "PrePurchase" && (
						<div className="flex flex-col gap-4">
							{PrePurchase.map((faq) => (
								<div key={faq.id} className="flex flex-col gap-4 text-start">
									<h3 className="text-xl font-bold">{faq.question}</h3>
									{faq.answer.map((answer, index) => (
										<p key={index}>{answer}</p>
									))}
								</div>
							))}
						</div>
					)}
					{activeSection === "LumiaFeatures" && (
						<div className="flex flex-col gap-4">
							{LumiaFeatures.map((faq) => (
								<div key={faq.id} className="flex flex-col gap-4 text-start">
									<h3 className="text-xl font-bold">{faq.question}</h3>
									{faq.answer.map((answer, index) => (
										<p key={index}>{answer}</p>
									))}
								</div>
							))}
						</div>
					)}
					{activeSection === "Support" && (
						<div className="flex flex-col gap-4">
							{Support.map((faq) => (
								<div key={faq.id} className="flex flex-col gap-4 text-start">
									<h3 className="text-xl font-bold">{faq.question}</h3>
									{faq.answer.map((answer, index) => (
										<p key={index}>{answer}</p>
									))}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FAQ;
