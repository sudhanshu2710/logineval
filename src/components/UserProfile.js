import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const location = useLocation();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  console.log(location.state, isAuth);
  const [post, setPost] = useState({});
  const [comment, setComment] = useState({});
  if (!isAuth) {
    navigate("/login");
    console.log("navigation to login");
  }
  useEffect(() => {
    fetch(`http://localhost:8000/posts/${location.state[0]}`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data_) => {
        console.log(data_);
        setPost({ ...data_ });
      });
    fetch(`http://localhost:8000/comments/${location.state[0]}`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data_) => {
        // console.log(data_);
        setComment({ ...data_ });
      });
  }, []);
  return (
    <div className={classes.profile}>
      <h1>{location.state[1]}</h1>
      <h2>post</h2>
      <h3>{post.post_title}</h3>
      <h4>{post.post_body}</h4>
      <h2>comments</h2>
      <h5>{comment.comment_details}</h5>
    </div>
  );
};

export default UserProfile;
