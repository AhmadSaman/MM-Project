import useFetch from "../useFetch";
import DisplayFilms from "./../components/DisplayFilms";
import { useState, useEffect } from "react";
const Search = () => {
	const [prefix, setPrefix] = useState("movie/upcoming");
	const [value, setvalue] = useState("");
	const [theUrl, setTheUrl] = useState(
		`https://api.themoviedb.org/3/${prefix}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1`
	);

	useEffect(() => {
		setTheUrl(
			`https://api.themoviedb.org/3/${prefix}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}`
		);

		return () => {
			console.log("cleanup");
		};
	}, [value]);

	const handleSearchInput = (event) => {
		setvalue(event.target.value);
		if (event.target.value === "") {
			setPrefix("movie/upcoming");
		} else {
			setPrefix("search/movie");
		}
	};

	const [data, pending] = useFetch(theUrl);

	return (
		<div className="Search lg:w-3/4 mx-auto  text-fourth">
			<form className="flex lg:w-3/4 mx-auto rounded-md m-5 border border-fourth overflow-hidden">
				<input
					className="bg-first lg:h-8 w-full pl-2 focus:outline-none transition duration-200 hover:1s"
					type="text"
					placeholder="Write Film Name..."
					onChange={handleSearchInput}
				/>
			</form>
			{pending && <p className="text-center">Loading...</p>}
			{prefix === "movie/upcoming" && data && !pending && (
				<h1 className="text-2xl text-center">Up Coming Movies</h1>
			)}

			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{data && <DisplayFilms data={data} />}
				{data && (
					<div className="flex justify-center w-3/4 mx-auto space-x-3 m-3">
						{data.page > 1 && (
							<button
								className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
								onClick={() =>
									setTheUrl(
										`https://api.themoviedb.org/3/${prefix}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}&page=${
											data.page - 1
										}`
									)
								}
							>
								Previous
							</button>
						)}
						{!(data.page > data.total_pages) && (
							<button
								className="border bg-third hover:border-fourth p-1 rounded-lg focus:outline-none transform transition duration-200 hover:scale-110"
								onClick={() =>
									setTheUrl(
										`https://api.themoviedb.org/3/${prefix}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}&page=${
											data.page + 1
										}`
									)
								}
							>
								Next
							</button>
						)}
					</div>
				)}
			</div>
			{data && data.total_pages === 0 && (
				<p className="text-fourth text-center">There is no result</p>
			)}
			{pending && data && data.total_pages !== 0 && (
				<p className="text-fourth text-center">Loading</p>
			)}
			{data && data.total_pages !== 0 && !pending && (
				<p className="text-fourth text-center">Page {data.page}</p>
			)}
		</div>
	);
};

export default Search;
