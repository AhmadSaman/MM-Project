import { useState } from "react";

const DisplayList = ({ data }) => {
	const [newData, setNewData] = useState([]);
	const newArr = [];
	const toArray = Object.keys(data);
	const theArray = toArray.map((element) =>
		fetch(
			`https://api.themoviedb.org/3/movie/${element}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62`
		)
	);
	Promise.all(theArray).then((res) => toJson(res));
	const toJson = (value) =>
		value.map((element) =>
			element.json().then((data) => {
				console.log(data);
			})
		);

	const convertImg = (path) => {
		if (path) {
			return `https://image.tmdb.org/t/p/original${path}`;
		}
	};
	console.log(newData);

	return <div>{}</div>;
};

export default DisplayList;
