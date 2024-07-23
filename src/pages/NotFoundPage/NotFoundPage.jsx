import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>
        Oops! No page was found. Please go to <Link to="/">home page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
