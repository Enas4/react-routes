import { useLocation, useParams, useNavigate } from "react-router-dom";

function User() {
  const { name } = useParams();
  const location = useLocation();
  const history = useNavigate();

  return (
    <div>
      <h1>I am an User{name} Page .</h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/enas` ? (
        <button onClick={() => history("/")}>Go to Home page</button>
      ) : null}
    </div>
  );
}

export default User;
