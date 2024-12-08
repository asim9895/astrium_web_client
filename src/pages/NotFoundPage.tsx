import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: "underline", color: "blue" }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
