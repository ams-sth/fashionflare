import Finch from "../assets/images/reviews/Alisha Finch.jpg";
import Sharpe from "../assets/images/reviews/Ewan Sharpe.jpg";
import Hanson from "../assets/images/reviews/Isabel Hanson.jpg";
import { SectionHeading } from "./ui";

const Reviews = () => {
	return (
		<div className="px-4">
			<SectionHeading
				title="What people say"
				subtitle="Real customer reviews from themeforest.net"
			/>
			<div className="container pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0 gap-16 md:gap-12">
				<div className="bg-[#FFFF] relative border rounded-xl shadow-lg hover:shadow-xl">
					<img
						src={Hanson}
						alt="Isabel Hanson"
						className="rounded-full object-contain w-24 absolute left-1/2 top-[-10%] translate-x-[-50%]"
					/>
					<div className="max-w-xs mx-auto py-20 px-8">
						<h1 className="font-semibold text-xl">Isabel Hanson</h1>
						<h1 className="text-sm">Designer</h1>
						<p className="pt-4">
							We had several questions and minor issues that we weren't aware of
							how to fix it. Contacted support and they were super quick...
						</p>
					</div>
				</div>
				<div
					className={`bg-[#FFFF] relative border rounded-xl shadow-lg hover:shadow-xl`}
				>
					<img
						src={Sharpe}
						alt="Ewan Sharpe"
						className="rounded-full object-contain w-24 mx-auto absolute left-1/2 -top-[10%] -translate-x-[50%]"
					/>
					<div className="max-w-xl mx-auto py-20 px-8">
						<h1 className="font-semibold text-xl">Ewan sharpe</h1>
						<h1 className="text-sm">Developer</h1>
						<p className="pt-4">
							By far one of the best developers we have worked with. They were
							extremely knowledgeable with any question, comment, or concern we
							had and solved any issue in a timely manner. We highly recommend
							them for not only their quality products (themes & HTML templates)
							but their customer service as well..
						</p>
					</div>
				</div>
				<div className="bg-[#FFFF] relative rounded-xl shadow-lg hover:shadow-xl">
					<img
						src={Finch}
						alt="Alisha Finch"
						className="rounded-full object-contain w-24 absolute left-1/2 -top-[10%] -translate-x-[50%]"
					/>
					<div className="max-w-xs mx-auto py-20 px-8">
						<h1 className="font-semibold text-xl">Alisha Finch</h1>
						<h1 className="text-sm">SEO Manager</h1>
						<p className="pt-4">
							The customer support is absolutely amazing. Every time I submitted
							an question, Bigsteps was able to provide an answer very fast..
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
