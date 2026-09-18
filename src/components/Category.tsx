import { NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Category = () => {
	const { category } = useAppSelector((state) => state.category);
	return (
		<div className="bg-white">
			<div className="container flex px-4 py-20 gap-4">
				{category.map((group, index) => (
					<div key={index} className="overflow-hidden">
						<NavLink to={group.path}>
							<img
								src={group.image}
								alt={group.name}
								className="rounded-full"
							/>
						</NavLink>
						<h1 className="pt-4 text-md break-all">{group.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
