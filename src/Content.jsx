import axios from "axios";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesShow } from "./MoviesShow";
import { FavoritesIndex } from "./FavoritesIndex";
import { FavoritesNew } from "./FavoritesNew";
import { FavoritesShow } from "./FavoritesShow";
import { ReviewsIndex } from "./ReviewsIndex";
import { ReviewsNew } from "./ReviewsNew";
import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";
import { useEffect, useState } from "react";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFavoritesshowVisiible, setIsFavoritesShowVisible] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const [favorites, setFavorites] = useState([]);

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };
  useEffect(handleIndexFavorites, []);

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
  const handleShowFavorite = (favorite) => {
    console.log("handleShowFavorite", favorite);
    setIsFavoritesShowVisible(true);
    setCurrentFavorite(favorite);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
    setIsFavoritesShowVisible(false);
  };

  const handleDestroyFavorite = (id) => {
    console.log("handleDestroyFavorite", id);
    axios.delete(`http://localhost:3000/favorites/${id}.json`).then((response) => {
      setFavorites(favorites.filter((favorites) => favorite.id !== id));
      handleClose();
    });
  };

  const [reviews, setReviews] = useState([]);

  const handleIndexReviews = () => {
    console.log("handleIndexReviews");
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  };
  useEffect(handleIndexReviews, []);

  const handleCreateReview = (params, successCallback) => {
    console.log("handleCreateReview", params);
    axios.post("http://localhost:3000/reviews.json", params).then((response) => {
      setReviews([...reviews, response.data]);
      successCallback();
    });
  };

  return (
    <main>
      <h1>CinemaScope</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <FavoritesNew onCreateFavorite={handleCreateFavorite} />
      <ReviewsNew onCreateReview={handleCreateReview} />
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <ReviewsIndex reviews={reviews} />
      <FavoritesIndex favorites={favorites} onShowFavorite={handleShowFavorite} />
      <Modal2 show={isFavoritesshowVisiible} onClose={handleClose}>
        <FavoritesShow favorite={currentFavorite} onDestroyFavorite={handleDestroyFavorite} />
      </Modal2>
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
      </Modal>
    </main>
  );
}
