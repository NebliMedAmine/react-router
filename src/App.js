import { useState } from "react";
import { Data } from "./components/Data";
import MoviesList from "./components/MovieList";
import "./App.css";
import Add from "./components/Add";
import Look from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";


export default function App() {
  const [moviesList, setMoviesList] = useState(Data);
  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);
  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="app">
      <header className="h">
        React Movie app
      <Look setNameSearch={setNameSearch} setRatingSearch={setRatingSearch}/>
      <Add addNewMovie={addNewMovie} />
      </header>
        <Routes>
          <Route  path="/"  element={<MoviesList moviesList={moviesList} nameSearch={nameSearch} ratingSearch={ratingSearch}/>}  />
          <Route  path="/description/:id" element={<Description />}/>
        </Routes>
    </div>
  );
}
