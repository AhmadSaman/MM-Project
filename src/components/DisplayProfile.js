const DisplayProfile = ({ data, credits, video }) => {
	const convertImg = (path) => {
		if (path) {
			return `https://image.tmdb.org/t/p/original${path}`;
		}
	};
	const convertVideo = (path) => {
		if (path) {
			return `https://www.youtube.com/embed/${path}`;
		}
	};
	const handleList = () => {
		localStorage.setItem(data.id, data.title);
	};

	return (
		<div className="DsplayProfile">
			<div className=" flex flex-col lg:flex-row lg:w-4/6 mx-auto mt-5   text-fourth">
				<div className="lg:w-1/4 w-2/4 mx-auto m-3">
					<img
						src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
						className=" rounded-lg border border-fourth"
					/>

					<button
						className="focus:outline-none bg-red-500 text-white p-1 rounded-md transform transition duration-200 hover:scale-90 my-2 w-full"
						onClick={handleList}
					>
						Add To List
					</button>
				</div>

				<div className="lg:w-3/4 mx-auto">
					<h1 className="text-3xl ">{data.title}</h1>
					<div className="my-5">
						<h3 className="text-xl font-bold">Overview</h3>
						<p className="ml-3">{data.overview}</p>
					</div>
					<div className="flex flex-row justify-around flex-wrap">
						<div className="">
							<h1 className="text-xl font-bold">Release Data</h1>
							<p>{data.release_date}</p>
						</div>
						<div className="">
							<h1 className="text-xl font-bold">Genres</h1>
							<ul>
								{data.genres.map((element) => (
									<li key={element.id}>{element.name}</li>
								))}
							</ul>
						</div>
						<div className="">
							<h1 className="text-xl font-bold">Time</h1>
							<p>{data.runtime}min</p>
						</div>
						<div>
							<h1 className="text-xl font-bold">Average Vote</h1>
							<p>{data.vote_average}/10</p>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:w-4/6 mx-auto mt-5  text-fourth">
				<h1 className="text-xl font-bold my-4 t">Cast</h1>
				<div
					id="scroll"
					className="flex w-full h-52 rounded-md overflow-scroll"
				>
					{credits.cast.map((element) => (
						<img
							className="mr-3 rounded-md border border-fourth"
							src={convertImg(element.profile_path)}
							key={element.id}
						/>
					))}
				</div>
			</div>
			{video.results.length !== 0 && (
				<div className="text-center my-3 mx-auto lg:w-4/6">
					<h1 className="text-3xl font-bold my-4 ">Trailer</h1>

					<iframe
						className=" w-full"
						height="600px"
						src={convertVideo(video.results[0].key)}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
};

export default DisplayProfile;
