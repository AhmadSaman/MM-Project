import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import DisplayProfile from "../components/DisplayProfile";
import DisplayFilms from "../components/DisplayFilms";
const Detail = () => {
	const { id } = useParams();
	const [data, pending] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62`
	);
	const [datasimilar, similarPending] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1`
	);
	return (
		<div className="Detail text-center mt-5">
			{pending && similarPending && <p>Loading...</p>}
			{data && <DisplayProfile data={data} />}
			<div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
				{datasimilar && <DisplayFilms data={datasimilar} />}
			</div>
		</div>
	);
};

export default Detail;
