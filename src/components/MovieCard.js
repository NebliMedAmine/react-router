import ReactStars from "react-stars";



const MovieCard = ({ el }) => {
  return (
    <div className="movie-card-container">
      <div className="image-container">
      <div className="bg-image" style={{ backgroundImage: `url(${el.PosterUrl})` }}>
      </div>
      </div>
      
      <div className="movie-info">
      <h2>Movie Details</h2>         
      <h1 className="title">{el.title}</h1>
      <h4>Rating:{el.rating}
      {
            <ReactStars
              count={5}
              value={el.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          }
      </h4>
      <span>{el.date}</span>
      </div>
    </div>
  );
};
export default MovieCard;

