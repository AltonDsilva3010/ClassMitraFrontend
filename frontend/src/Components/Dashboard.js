import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import "./Dashboard.css";
import classrooms from "./classesdata";
import logindata from "./logindata";
import ErrorPage from "./ErrorPage";
import classImage from "./img/subject.jpg";
const Dashboard = ({ classes }) => {
  return (
    <div>
      <div class="quote">
        <div class="quote-img">
          <div class="quote-txt">
            <h1>
              Education is an admirable thing, but it is well to remember from
              time to time that nothing that is worth knowing can be taught.
              -Oscar Wilde
            </h1>
          </div>
        </div>
      </div>
      <div className="title">
        <h1>Classes</h1>
      </div>

      <div className="main">
        {classes.map((classitem) => {
          return (
            <div className="card">
              {classrooms.map((classroom) => {
                if (classitem === classroom.id) {
                  const { id, subject, semester, subjectcode, teacher } =
                    classroom;
                  return (
                    <div>
                      <div className="image">
                        <img src={classImage} />
                      </div>
                      <div className="details">
                        <div className="c-name">
                          <h1>Class Name: {subject}</h1>
                        </div>
                        <div className="c-name">
                          <h1>Teacher's Name: {teacher}</h1>
                        </div>
                        <div className="room">
                          <h1>Room Number: {subjectcode}</h1>
                        </div>
                      </div>
                      <Link to={`classroom/${id}`}>
                        <button>Enter</button>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
