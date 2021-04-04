import { useState } from "react";
import useFetch from "../useFetch";
import DisplayFilms from "./../components/DisplayFilms";
const Home = () => {
	const [theUrl, settheUrl] = useState(
		"https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1"
	);
	const handleNext = () =>
		settheUrl(
			`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${
				data.page - 1
			}`
		);
	const handlePrevious = () =>
		settheUrl(
			`https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=${
				data.page + 1
			}`
		);

	const [data, pending] = useFetch(theUrl);
	return (
		<div className="home text-fourth mt-5">
			<div className="flex flex-wrap lg:w-5/6  mx-auto justify-center">
				{data && <DisplayFilms data={data} />}
				{data && (
					<div className="flex justify-center w-3/4 mx-auto space-x-3 m-3">
						{data.page > 1 && (
							<button
								className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
								onClick={handleNext}
							>
								Previous
							</button>
						)}
						<button
							className="border bg-third hover:border-fourth p-1 rounded-lg focus:outline-none transform transition duration-200 hover:scale-110"
							onClick={handlePrevious}
						>
							Next
						</button>
					</div>
				)}
			</div>
			{pending && <p className="text-fourth  text-center">Loading...</p>}
			{data && !pending && (
				<p className="text-fourth text-center">Page {data && data.page}</p>
			)}
		</div>
	);
};

export default Home;
