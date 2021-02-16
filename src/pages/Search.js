import useFetch from '../useFetch';
import DisplayFilms from './../components/DisplayFilms';
import {useState, useEffect} from 'react';
import {sendRequest} from '../util';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [data, setdata] = useState(null);

  const [pageNo, setPageNo] = useState(1);

  console.log(data);

  useEffect(() => {
    input && sendRequest(input).then(data => setdata(data));
  }, [pageNo]);

  function handleSeacrh(e) {
    setInput(e.target.value);
    setLoading(true);
    if (e.target.value === '') {
      setdata(null);
      setLoading(false);
    }
    e.target.value &&
      sendRequest(e.target.value).then(data => {
        setLoading(false);
        setdata(data);
      });
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
        {loading && <p>Loading...</p>}
        {data && <DisplayFilms data={data} />}
        {data?.results.length && (
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
