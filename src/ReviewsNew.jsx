/* eslint-disable react/prop-types */
export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(params, () => event.target.reset());
  };
  return (
    <div>
      <h2> Write a review!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Movie: <input name="movie" type="text" />
        </div>
        <div>
          Thoughts: <input name="thoughts" type="text" />
        </div>
        <button type="submit">Create Review</button>
      </form>
    </div>
  );
}
