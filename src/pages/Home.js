import { useState } from "react";
import useFetch from "../useFetcch";
import DisplayFilms from "./../components/DisplayFilms";
const Home = () => {
	//The Url
	const [theUrl, settheUrl] = useState(
		"https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1"
	);
	//Calling Data
	const [data, pending] = useFetch(theUrl);
	//increase and Decrease
	const counter = (type) => {
		const pageNo = parseInt(theUrl.split("=")[2]);
		if (type === "increase") {
			return pageNo + 1;
		} else {
			if (parseInt(pageNo) > 1) {
				return parseInt(pageNo) - 1;
			} else if (parseInt(pageNo) <= 1 || parseInt(pageNo) === NaN) {
				console.log("it's the first page");
			}
		}
	};
	return (
		<div className="home font-mono text-fourth">
			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{pending && <p>Loading...</p>}
				{data && <DisplayFilms data={data} />}
			</div>
			{!pending && (
				<div className="flex justify-center lg:w-3/4 mx-auto space-x-3 m-3">
					{theUrl !==
						"https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1" && (
						<button
							className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
							onClick={() =>
								settheUrl(
									`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${counter(
										"decrease"
									)}`
								)
							}
						>
							Previous
						</button>
					)}

					<button
						className="border bg-third hover:border-fourth p-1 rounded-lg focus:outline-none transform transition duration-200 hover:scale-110"
						onClick={() =>
							settheUrl(
								`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${counter(
									"increase"
								)}`
							)
						}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};

export default Home;
