import useFetch from "../useFetch";
import DisplayFilms from "./../components/DisplayFilms";
import { useState, useEffect } from "react";
const Search = () => {
	const [value, setvalue] = useState("a");
	const [theUrl, settheUrl] = useState(
		`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}&page=1`
	);
	useEffect(() => {
		if (value) {
			settheUrl(
				`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}`
			);
		}

		return () => {
			console.log("cleanup");
		};
	}, [value]);

	const [data, pending] = useFetch(theUrl);

	return (
		<div className="Search lg:w-3/4 mx-auto font-mono text-fourth">
			<form className="flex lg:w-3/4 mx-auto rounded-md m-5 border border-fourth overflow-hidden">
				<input
					className="bg-first lg:h-8 w-full pl-2 focus:outline-none transition duration-200 hover:1s"
					type="text"
					placeholder="Write Film Name..."
					onChange={(event) => {
						setvalue(event.target.value);
						// if (value) {
						// 	settheUrl(
						// 		`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}`
						// 	);
						// }
					}}
				/>
				{/* <input
					type="submit"
					className="p-2 transform transition duration-200 hover:1s focus:outline-none border-fourth  bg-second text-fourth  hover:bg-third "
				/> */}
			</form>
			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{pending && <p>Loading...</p>}
				{data && <DisplayFilms data={data} />}
				{data && (
					<div className="flex justify-center lg:w-3/4 mx-auto space-x-3 m-3">
						{data.page > 1 && (
							<button
								className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
								onClick={() =>
									settheUrl(
										`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}&page=${
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
									`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}&page=${
										data.page + 1
									}`
								)
							}
						>
							Next
						</button>
					</div>
				)}
				{console.log(theUrl, value)}
			</div>
			<h1 className="text-fourth text-xl text-center">
				Page {data && data.page}
			</h1>
		</div>
	);
};

export default Search;
