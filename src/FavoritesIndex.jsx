/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h2>All favorites</h2>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.user_id}</h2>
          <h2>{favorite.movie_id}</h2>
          <button onClick={() => props.onShowFavorite(favorite)}>Remove Favorite</button>
        </div>
      ))}
    </div>
  );
}
