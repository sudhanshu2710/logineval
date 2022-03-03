import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
