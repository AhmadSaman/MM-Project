const DisplayFilms = ({ data }) => {
	return data.map((element) => {
		return (
			<div
				className="flex flex-col w-56 flex-wrap bg-second m-3 rounded-md overflow-hidden border border-fourth transform transition duration-200 hover:scale-90 cursor-pointer"
				key={element[1]}
			>
				<img className="" src={element[1]} alt={element[0]} />
				<h1
					className="text-center p-3"
					style={{
						boxShadow: "0px -3px 2px 0px rgba(0,0,0,0.5)",
					}}
				>
					{element[0]}
				</h1>
			</div>
		);
	});
};
export default DisplayFilms;
