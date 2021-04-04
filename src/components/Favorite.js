import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import DisplayList from "./DisplayList";

const Favorite = () => {
	const [toggleList, setToggleList] = useState(``);
	const [theArray, setTheArray] = useState({});

	const [data, pending] = useFetch(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&page=1`
	);

	useEffect(() => {
		setTheArray(localStorage);
		return () => {
			console.log("cleanup");
		};
	}, [localStorage]);
	const handleClick = () => {
		if (toggleList === ``) {
			setToggleList(
				<div id="overlay">
					<div
						id="favorite-scroll"
						className="bg-first fixed lg:top-14 lg:left-52 top-0 left-0 border border-fourth lg:rounded-md lg:w-3/4 lg:h-3/4 w-full h-3/4 overflow-scroll z-10"
					>
						<p className="text-center text-2xl p-2">Your List</p>
						<div className="">
							<DisplayList data={theArray} />
						</div>
					</div>
				</div>
			);
		} else {
			setToggleList(``);
		}
	};

	return (
		<div className="text-fourth">
			<button
				className="fixed bottom-2 right-40 rounded-full bg-red-500 p-4 transform transition duration-200 hover:scale-110 text-white hover:border-fourth focus:outline-none z-20"
				onClick={handleClick}
			>
				List
			</button>
			{toggleList}
		</div>
	);
};

export default Favorite;
