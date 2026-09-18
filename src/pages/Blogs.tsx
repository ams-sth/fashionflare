import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import ReactStars from "../utils/ReactStars";

const Blogs = () => {
	const navigate = useNavigate();

	const { articles, tags } = useAppSelector((state) => state.blogs);

	const { recommend } = useAppSelector((state) => state.recommendations);

	const recom = recommend.slice(0, 5);

	const handleReadMore = (blogId) => {
		navigate(`/article/${blogId}`);
	};
	return (
		<div className="container px-4">
			<h1 className="text-4xl font-bold">News</h1>
			<div className="flex flex-col-reverse lg:flex-row justify-center gap-12">
				<div className="flex flex-col gap-4 lg:w-[70%] order-1">
					{articles.map((blog, index) => (
						<div key={index} className="lg:flex gap-4">
							<img
								src={blog.image}
								alt="Articles"
								className=" rounded-2xl w-96 h-72 object-cover"
							/>
							<div className="flex flex-col gap-2 text-start pt-4">
								<h1 className="font-bold text-lg">{blog.title}</h1>
								<h1>Date: {blog.date}</h1>
								<p>{blog.description}</p>
								<button
									type="button"
									className="bg-blue-600 hover:bg-blue-800 rounded-2xl text-white p-2"
									onClick={() => handleReadMore(blog.id)}
								>
									Read Article
								</button>
							</div>
						</div>
					))}
				</div>
				<div className="lg:w-[30%]">
					<h1 className="text-xl text-left font-semibold">Featured Products</h1>
					<div className="mb-5">
						{recom.map((product) => (
							<div key={product.id} className="flex gap-2 pt-4">
								<div>
									<img
										src={product.image[0]}
										alt={product.productName}
										className="image-contain rounded-2xl w-24"
									/>
								</div>
								<div>
									<h1>{product.productName}</h1>
									<h1 className="text-left">Price: ${product.price}</h1>
									<ReactStars
										count={5}
										size={24}
										half={true}
										color1={"#333"}
										color2={"#f4c10f"}
										edit={true}
									/>
								</div>
							</div>
						))}
					</div>
					<h1 className="text-xl text-left font-semibold">Featured Posts</h1>
					<div className="mb-5">
						{articles.map((post) => (
							<div key={post.id} className="flex gap-2 pt-4">
								<div>
									<img
										src={post.image}
										alt={post.title}
										className="object-cover rounded-2xl w-24 h-32"
									/>
								</div>
								<div>
									<h1 className="break-all text-left">{post.title}</h1>
									<h1 className="text-left">Date: {post.date}</h1>
								</div>
							</div>
						))}
					</div>
					<h1 className="text-xl text-left font-semibold mb-4">Category</h1>
					<div className="flex flex-wrap gap-4">
						{tags.map((tag, index) => (
							<div
								key={index}
								className="bg-[#FFFF] border rounded-md p-2 items-center"
							>
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
