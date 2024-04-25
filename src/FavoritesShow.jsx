/* eslint-disable react/prop-types */
export function FavoritesShow(props) {
  const handleClick = () => {
    props.onDestroyFavorite(props.favorite.id);
  };
  return (
    <div>
      <h2>Favorites</h2>
      <p>User_id: {props.favorite.user_id}</p>
      <p>Movie_id: {props.favorite.movie_id}</p>
      <button onClick={handleClick}>Remove favorite</button>
    </div>
  );
}
