import { useState, useEffect } from "react";
const useFetch = (url) => {
	const [data, setdata] = useState(null);
	const [pending, setpending] = useState(true);
	const convertImg = (img) => {
		return `https://image.tmdb.org/t/p/original${img}`;
	};
	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const newData = data.results.map((element) => {
					return [element.title, convertImg(element.poster_path)];
				});

				setpending(false);
				setdata(newData);
			})
			.catch((err) => console.log(err));
		return () => {
			console.log("cleanup");
		};
	}, [url]);

	return [data, pending];
};

export default useFetch;
