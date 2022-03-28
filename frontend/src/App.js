import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ErrorPage from "./Components/ErrorPage";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import WithNav from "./Components/WithNav";
import WithOutNav from "./Components/WithoutNav";
import DashNav from "./Components/DashNav";
import WithDashNav from "./Components/WithDashNav";
import WithoutDashNav from "./Components/WithoutDashNav";
import Classroom from "./Components/Classroom";
import Assignment from "./Components/Assignment";
import CreateClassroom from "./Components/CreateClassroom";
import logindata from "./Components/logindata";
import CreateAssignment from "./Components/CreateAssignment";
const Home = () => {
  return (
    <div className="courses-available">
      <h2>Home Page</h2>
    </div>
  );
};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("teacher");
  const [currentId, setCurrentId] = useState(1);
  const [person, setPerson] = useState(logindata);
  const { id, username, password, classes } = person[currentId];

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<LoginPage setIsLogin={setIsLogin} isLogin={isLogin} />}
            />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
          <Route element={<WithOutNav />}>
            <Route element={<WithDashNav />}>
              <Route
                path="/dashboard"
                element={<Dashboard classes={classes} />}
              />
              <Route path="/classroomcreation" element={<CreateClassroom />} />
              <Route path="/products" element={<SignUpPage />} />
              <Route path="/assignment/:id" element={<Assignment />} />
              <Route path="dashboard/classroom/:id" element={<Classroom />} />
              <Route
                path="dashboard/classroom/:id/createassignment/:id"
                element={<CreateAssignment />}
              />
            </Route>
            <Route element={<WithoutDashNav />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
