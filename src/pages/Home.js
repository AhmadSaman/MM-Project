import { useState, useEffect } from "react";
const Home = () => {
  const [data, setdata] = useState(null);
  const [pending, setpending] = useState(true);
  useEffect(() => {
    const myFetch = () => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&page=1"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const newData = data.results.map((element) => {
            const img = `https://image.tmdb.org/t/p/original${element.poster_path}`;
            return [element.title, img];
          });
          setpending(false);
          setdata(newData);
        })
        .catch((err) => console.log(err));
    };

    return myFetch();
  }, []);
  const displayData = (data) => {
    return data.map((element) => {
      return (
        <div
          className="flex flex-col w-56 flex-wrap bg-second m-3 rounded-md overflow-hidden border border-fourth"
          key={element[1]}
        >
          <img className="" src={element[1]} alt={element[0]} />
          <h1 className="text-center p-3">{element[0]}</h1>
        </div>
      );
    });
  };

  return (
    <div className="home font-mono text-fourth">
      <div className="flex flex-wrap lg:w-3/4 mx-auto justify-center">
        {pending && <p>Loading...</p>}
        {data && displayData(data)}
      </div>
    </div>
  );
};

export default Home;
