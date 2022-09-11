import MovieCard from "./MovieCard";
import {Link} from "react-router-dom"
const MoviesList = ({ moviesList, nameSearch,ratingSearch }) => {
  

  return (
    <div>
      {moviesList
        .filter(
          (el) =>
            el.title.toLowerCase().includes(nameSearch.toLowerCase())  &&  el.rating >= ratingSearch  
        )
        .map((el, i) => (
          <Link to={`/description/${el.id}` }  className="lien"  ><MovieCard el={el}  /></Link>

        ))}
    </div>
  );
};
export default MoviesList;
