import ReactStars from "react-stars";
const Look = ({ setNameSearch,setRatingSearch }) => {
  return (
    <div className="search">
      <input placeholder="Search for a movie" type="text" onChange={(el) => setNameSearch(el.target.value)} />
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        edit={true}
        onChange={(newRating) => setRatingSearch(newRating)}
      />
    </div>
  );
};
export default Look;