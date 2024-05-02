/* eslint-disable react/prop-types */
export function ReviewsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateReview(props.review.id, params, () => event.target.resest());
  };
  return (
    <div>
      <h2>Full review</h2>
      <p>Name: {props.review.name}</p>
      <p>Movie: {props.review.movie}</p>
      <p>Thoughts: {props.review.thoughts}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.review.name} name="name" type="text" />
        </div>
        <div>
          Movie: <input defaultValue={props.review.movie} name="movie" type="text" />
        </div>
        <div>
          Thoughts: <input defaultValue={props.review.thoughts} name="thoughts" type="text" />
        </div>
        <button type="submit">Update your review</button>
      </form>
    </div>
  );
}
