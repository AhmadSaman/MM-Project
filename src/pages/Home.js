import { useState } from "react";
import useFetch from "../useFetch";
import DisplayFilms from "./../components/DisplayFilms";
const Home = () => {
	//The Url
	const [theUrl, settheUrl] = useState(
		"https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1"
	);
	//Calling Data
	const [data, pending] = useFetch(theUrl);
	return (
		<div className="home font-mono text-fourth mt-5">
			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{pending && <p>Loading...</p>}
				{data && <DisplayFilms pending={pending} data={data} />}

				{data && (
					<div className="flex justify-center lg:w-3/4 mx-auto space-x-3 m-3">
						{data.page > 1 && (
							<button
								className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
								onClick={() =>
									settheUrl(
										`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${
											data.page - 1
										}`
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
									`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${
										data.page + 1
									}`
								)
							}
						>
							Next
						</button>
					</div>
				)}
			</div>
			<h1 className="text-fourth text-xl text-center">
				Page {data && data.page}
			</h1>
		</div>
	);
};

export default Home;
