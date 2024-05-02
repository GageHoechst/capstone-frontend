/* eslint-disable react/prop-types */
export function ReviewsIndex(props) {
  return (
    <div>
      <h2>All reviews</h2>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.name}</h3>
          <p>Movie: {review.movie}</p>
          <p>Thoughts: {review.thoughts}</p>
        </div>
      ))}
    </div>
  );
}
