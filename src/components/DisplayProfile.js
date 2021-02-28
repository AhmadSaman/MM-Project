const DisplayProfile = ({ data }) => {
	return (
		<div className="DsplayProfile flex flex-col lg:w-3/5 mx-auto mt-5 text-center text-fourth">
			<img
				src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
				className="w-2/6 mx-auto m-3 rounded-lg border border-fourth"
			/>
			<div className="w-4/6 mx-auto">
				<h1 className="text-3xl  my-3">{data.title}</h1>
				<div className="my-5">
					<h3 className="text-xl ">Overview</h3>
					<p className="ml-3 text-left">{data.overview}</p>
				</div>
				<div className="my-3">
					<h1 className="text-xl ">Release Data</h1>
					<p>{data.release_date}</p>
				</div>
				<div className="my-3">
					<h1 className="text-xl">Genres</h1>
					<ul>
						{data.genres.map((element) => (
							<li key={element.id}>{element.name}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DisplayProfile;
