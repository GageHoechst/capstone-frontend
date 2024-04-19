/* eslint-disable react/prop-types */
export function MoviesShow(props) {
  return (
    <div>
      <h1> Movie info</h1>
      <p>Name: {props.movie.name}</p>
      <p>Director: {props.movie.director}</p>
      <p>Image_url: {props.movie.image_url}</p>
      <p>Description: {props.movie.description}</p>
      <p>Run_time: {props.movie.run_time}</p>
    </div>
  );
}
