import { useState, useEffect } from "react";
const useFetch = (url) => {
	const [data, setdata] = useState(null);
	const [pending, setpending] = useState(true);

	useEffect(() => {
		setpending(true);
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setpending(false);
					setdata(data);
				})
				.catch((err) => console.log(err));
			return () => {
				console.log("cleanup");
			};
		}, 500);
	}, [url]);
	return [data, pending];
};

export default useFetch;
