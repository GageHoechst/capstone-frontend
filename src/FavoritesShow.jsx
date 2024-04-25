/* eslint-disable react/prop-types */
export function FavoritesShow(props) {
  return (
    <div>
      <h2>Favorites</h2>
      <p>User_id: {props.favorite.user_id}</p>
      <p>Movie_id: {props.favorite.movie_id}</p>
    </div>
  );
}
