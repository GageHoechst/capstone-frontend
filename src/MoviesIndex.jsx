/* eslint-disable react/prop-types */
export function MoviesIndex(props) {
  return (
    <div>
      <h1>All movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>{movie.director}</p>
          <img src={movie.image_url} />
          <p>{movie.description}</p>
          <p>{movie.run_time}</p>
        </div>
      ))}
    </div>
  );
}
