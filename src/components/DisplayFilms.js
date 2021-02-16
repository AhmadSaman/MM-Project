import {Link} from 'react-router-dom';

const DisplayFilms = ({data, url}) => {
  const convertImg = path => {
    if (path) {
      return `https://image.tmdb.org/t/p/original${path}`;
    }
  };

  return data.results?.length ? (
    data.results.map(element => {
      return (
        <div
          className='flex flex-col w-56 flex-wrap bg-second m-3 rounded-md overflow-hidden border border-fourth transform transition duration-200 hover:scale-90 cursor-pointer'
          key={element.id}
        >
          <Link to={`/Detail/${element.id}`} key={element.id} className=''>
            <img
              className=''
              src={convertImg(element.poster_path)}
              alt={element.title}
            />
            <h1 className='text-center p-3'>{element.title}</h1>
          </Link>
        </div>
      );
    })
  ) : (
    <h1 className='text-center'>Sorry No Result found</h1>
  );
};
export default DisplayFilms;
