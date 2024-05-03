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
import { ReviewsShow } from "./ReviewsShow";
import { Modal } from "./Modal";
import { Modal2 } from "./Modal2";
import { Modal3 } from "./Modal3";
import { useEffect, useState } from "react";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFavoritesshowVisiible, setIsFavoritesShowVisible] = useState(false);
  const [currentFavorite, setCurrentFavorite] = useState({});
  const [isReviewsShowVisible, setIsReviewsShowVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState({});

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
  const handleShowReview = (review) => {
    console.log("handleShowReview", review);
    setIsReviewsShowVisible(true);
    setCurrentReview(review);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisible(false);
    setIsFavoritesShowVisible(false);
    setIsReviewsShowVisible(false);
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
  const handleUpdateReview = (id, params, successCallback) => {
    console.log("handleUpdateReview", params);
    axios.patch(`http://localhost:3000/reviews/${id}.json`, params).then((response) => {
      setReviews(
        reviews.map((review) => {
          if (review.id === response.data.id) {
            return response.data;
          } else {
            return review;
          }
        })
      );
      successCallback();
      handleClose;
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
      <Modal3 show={isReviewsShowVisible} onClose={handleClose}>
        <ReviewsShow review={currentReview} onUpdateReview={handleUpdateReview} />
      </Modal3>
      <ReviewsIndex reviews={reviews} onShowReview={handleShowReview} />
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
