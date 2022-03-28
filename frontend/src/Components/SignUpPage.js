import React from "react";
import "./style.css";

const SignUpPage = ({ setIsLogin, isLogin }) => {
  return (
    <div>
      <form>
        <button type="submit" onClick={() => setIsLogin(!isLogin)}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
