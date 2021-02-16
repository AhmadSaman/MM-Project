import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className="bg-first text-fourth border-b border-fourth font-mono">
			<ul className="w-1/2 flex justify-center mx-auto space-x-10 p-5">
				<li className="hover:text-third transform transition duration-200 hover:scale-110 ">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-third transform transition duration-200 hover:scale-110 ">
					<Link to="/Search">Search</Link>
				</li>
				<li className="hover:text-third transform transition duration-200 hover:scale-110 ">
					<Link to="/Genre">Genre</Link>
				</li>
				<li className="hover:text-third transform transition duration-200 hover:scale-110 ">
					<Link to="/"></Link>
				</li>
			</ul>
		</div>
	);
}
export default Navbar;
