import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <form onSubmit={() => navigate("/dashboard", { replace: true })}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
