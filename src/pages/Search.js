import useFetch from "../useFetch";
import DisplayFilms from "./../components/DisplayFilms";
import { useState } from "react";
const Search = () => {
	const [value, setvalue] = useState("a");
	let [url, seturl] = useState(
		`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${value}`
	);
	const [data, pending] = useFetch(url);
	return (
		<div className="Search lg:w-3/4 mx-auto font-mono text-fourth">
			<form className="flex lg:w-3/4 mx-auto rounded-md m-5 border border-fourth overflow-hidden">
				<input
					className="bg-first lg:h-8 w-full pl-2 focus:outline-none transition duration-200 hover:1s"
					type="text"
					placeholder="Write Film Name..."
					onChange={(event) => {
						if (event.target.value)
							seturl(
								`https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${event.target.value}`
							);
					}}
				/>
				{/* <input
					type="submit"
					className="p-2 transform transition duration-200 hover:1s focus:outline-none border-fourth  bg-second text-fourth  hover:bg-third "
				/> */}
			</form>
			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{pending && <p>Loading...</p>}
				{data && <DisplayFilms data={data} url={url} />}
			</div>
		</div>
	);
};

export default Search;
