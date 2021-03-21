import { withRouter } from "react-router-dom";

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews yet</p>
      )}
    </>
  );
};

export default withRouter(Reviews);
