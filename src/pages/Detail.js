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
	const [credits, creditsPending] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62`
	);
	const [video, videoPending] = useFetch(
		`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62`
	);

	return (
		<div className="Detail text-center mt-5 text-fourth">
			{pending && similarPending && creditsPending && <p>Loading...</p>}
			{data && credits && video && (
				<DisplayProfile data={data} credits={credits} video={video} />
			)}
			{datasimilar && (
				<div className="lg:w-4/6 mx-auto mt-3">
					<h1 className="text-xl">Similer</h1>
					<div className="flex flex-wrap  justify-center">
						<DisplayFilms data={datasimilar} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Detail;
