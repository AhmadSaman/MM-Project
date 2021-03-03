import { useState, useEffect } from "react";
import DisplayFilms from "../components/DisplayFilms";
import useFetch from "../useFetch";
const Genre = () => {
	const [valueId, setValueId] = useState();
	const [theUrl, settheUrl] = useState(
		`https://api.themoviedb.org/3/discover/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${valueId}`
	);
	const [data, pending] = useFetch(
		"https://api.themoviedb.org/3/genre/movie/list?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62"
	);

	const [dataFilms, pendingFilms] = useFetch(theUrl);

	const handleNext = () =>
		settheUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
				dataFilms.page - 1
			}&with_genres=${valueId}`
		);

	useEffect(() => {
		settheUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${valueId}`
		);
		return () => {
			console.log("cleanup");
		};
	}, [valueId]);
	const handlePrevious = () =>
		settheUrl(
			`https://api.themoviedb.org/3/discover/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
				dataFilms.page + 1
			}&with_genres=${valueId}`
		);
	const handleValue = (event) => {
		const value = event.target.value;
		setValueId(value);
	};
	console.log(dataFilms);
	return (
		<div className="text-fourth">
			<div className="lg:w-1/2 mx-auto">
				<div className="my-3 text-center">
					<select
						className="border border-fourth rounded-sm cursor-pointer px-5 py-1 outline-none"
						name="genre"
						onChange={handleValue}
						defaultValue="selected"
					>
						<option value="selected" disabled>
							Select your option :
						</option>
						{data &&
							data.genres.map((element) => (
								<option value={element.id} key={element.id}>
									{element.name} {element.id}
								</option>
							))}
					</select>
				</div>
			</div>
			{pendingFilms && <p className="text-center">Loading...</p>}
			<div className="flex flex-wrap lg:w-5/6   mx-auto justify-center">
				{dataFilms && <DisplayFilms data={dataFilms} />}
				{dataFilms && (
					<div className="flex justify-center lg:w-3/4 mx-auto space-x-3 m-3">
						{dataFilms.page > 1 && (
							<button
								className="border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90"
								onClick={handleNext}
							>
								Previous
							</button>
						)}
						{dataFilms.total_results !== 0 && (
							<button
								className="border bg-third hover:border-fourth p-1 rounded-lg focus:outline-none transform transition duration-200 hover:scale-110"
								onClick={handlePrevious}
							>
								Next
							</button>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Genre;
