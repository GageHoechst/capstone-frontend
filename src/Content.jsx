import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesShow } from "./MoviesShow";
import { FavoritesNew } from "./FavoritesNew";
import { Modal } from "./Modal";
import { useEffect, useState } from "react";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };
  const handleCreateFavorite = (params, successCallback) => {
    console.log("handleCreateFavorite", params);
    axios.post("http://localhost:3000/favorites.json", params).then((response) => {
      setFavorites([...favorites, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexMovies, []);

  const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie);
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
  };

  return (
    <main>
      <h1>Title</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />

      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
      </Modal>
    </main>
  );
}
