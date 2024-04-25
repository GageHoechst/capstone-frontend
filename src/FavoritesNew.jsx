/* eslint-disable react/prop-types */
export function FavoritesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFavorite(params, () => event.target.reset());
  };
  return (
    <div>
      <h2>New favorite movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          Movie_id: <input name="movie_id" type="text" />
        </div>
        <button type="submit">Create favorite</button>
      </form>
    </div>
  );
}
