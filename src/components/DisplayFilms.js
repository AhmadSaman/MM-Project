import {Link} from 'react-router-dom';

const DisplayFilms = ({data, url}) => {
  const convertImg = path => {
    if (path) {
      return `https://image.tmdb.org/t/p/original${path}`;
    }
  };

  console.log('data', data);
  // const [myurl, setmyurl] = useState(url);
  // 	const [newdata, pending] = useFetch(myurl);
  // 	const memeurl = (url, status) => {
  // 		let newUrl = url.split("page=");
  // 		let newpageNo;

  // 		if (status === "next") {
  // 			newpageNo = parseInt(newUrl[1]) + 1;
  // 		} else {
  // 			newpageNo = parseInt(newUrl[1]) - 1;
  // 		}
  // 		newUrl.splice(1, 1, `page=${newpageNo}`);
  // 		const urlnew = newUrl.join("");
  // 		return urlnew;
  // 	};
  return (
    data.results?.length &&
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
  );
};
export default DisplayFilms;
