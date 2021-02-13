const DisplayProfile = ({ data }) => {
	return (
		<div className="DsplayProfile lg:w-3/4 mx-auto mt-5 font-mono text-center">
			<img
				src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
				className="lg:w-1/4 mx-auto rounded-lg border border-fourth"
			/>
			<h1 className="text-3xl text-fourth my-5">{data.title}</h1>
		</div>
	);
};

export default DisplayProfile;
