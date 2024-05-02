/* eslint-disable react/prop-types */
export function ReviewsShow(props) {
  return (
    <div>
      <h2>Full review</h2>
      <p>Name: {props.review.name}</p>
      <p>Movie: {props.review.movie}</p>
      <p>Thoughts: {props.review.thoughts}</p>
    </div>
  );
}
