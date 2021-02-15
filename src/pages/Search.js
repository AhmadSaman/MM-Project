import useFetch from '../useFetch';
import DisplayFilms from './../components/DisplayFilms';
import {useState, useEffect} from 'react';
const Search = () => {
  const [input, setInput] = useState('');
  const [data, setdata] = useState(null);
  const [pending, setpending] = useState(true);
  const [value, setvalue] = useState('a');
  const [theUrl, settheUrl] = useState();
  const [url, seturl] = useState(theUrl);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    input &&
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${input}&page=${pageNo}`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          setpending(false);
          setdata(data);
        });
  }, [pageNo]);

  function handleSeacrh(e) {
    e.target.value &&
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&query=${e.target.value}`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          setpending(false);
          setdata(data);
        });

    setInput(e.target.value);
  }

  return (
    <div className='Search lg:w-3/4 mx-auto font-mono text-fourth'>
      <form className='flex lg:w-3/4 mx-auto rounded-md m-5 border border-fourth overflow-hidden'>
        <input
          className='bg-first lg:h-8 w-full pl-2 focus:outline-none transition duration-200 hover:1s'
          type='text'
          placeholder='Write Film Name...'
          onChange={handleSeacrh}
        />
      </form>
      <div className='flex flex-wrap lg:w-3/4 mx-auto justify-center'>
        {pending && <p>Loading...</p>}
        {data && <DisplayFilms data={data} />}
        {data && (
          <div className='flex justify-center lg:w-3/4 mx-auto space-x-3 m-3'>
            {data.page > 1 && (
              <button
                className='border bg-first p-1 rounded-lg hover:bg-third hover:border-fourth focus:outline-none transform transition duration-200 hover:scale-90'
                onClick={e => setPageNo(prevState => prevState - 1)}
              >
                Previous
              </button>
            )}
            <button
              className='border bg-third hover:border-fourth p-1 rounded-lg focus:outline-none transform transition duration-200 hover:scale-110'
              onClick={e => setPageNo(prevState => prevState + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
