import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/auth";
import classes from "./Auth.module.css";
const username = "sudhanshu";
const pass = "abcde";
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    // if (event.target[0].value != username || event.target[1].value != pass) {
    //   alert("wrong credentials");
    //   return;
    // }

    fetch(`http://localhost:8000/users`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data_) => {
        console.log(data_);
        data_.forEach((elem, index) => {
          if (elem.username == event.target[0].value) {
            dispatch(authAction.login());
            navigate("/user", { state: [index + 1, event.target[0].value] });
            return;
          }
        });
      });
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Username</label>
            <input type="text" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
