import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authAction.logout());
    navigate("/login");
  };
  return (
    <header className={classes.header}>
      {!isAuth && <h1>Login</h1>}
      {isAuth && <h1>Posts ....</h1>}

      {isAuth && (
        <nav>
          <ul>
            <li>{isAuth && <button onClick={logoutHandler}>Logout</button>}</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
