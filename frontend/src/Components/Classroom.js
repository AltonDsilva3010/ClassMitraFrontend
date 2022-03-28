import React, { useState } from "react";
import "./Classroom.css";
import LoginImage from "./img/login.jpg";
import assignments from "./Assigmentsdata";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useParams,
} from "react-router-dom";
import Assignment from "./Assignment";
import classes from "./classesdata";
const Classroom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let params = useParams();

  return (
    <div className="classroom-container">
      {classes.map((classitem) => {
        const { id, subject, semester, subjectcode, teacher } = classitem;
        if (id == params.id) {
          return (
            <div>
              {" "}
              <div className="img-container">
                <img
                  src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGJsdWV8ZW58MHx8MHx8&w=1000&q=80"
                  alt="title"
                  className="classroom-image"
                />
                <h3>{`${subject}`.toUpperCase()}</h3>
                <p>{`${teacher}`.toUpperCase()}</p>
              </div>
              <div className="creation-container">
                <h3>
                  <Link to={`createassignment/${id}`}>Create Assignment</Link>
                </h3>
                <h3>
                  <Link to="#">Create Notes</Link>
                </h3>
                <h3>
                  <Link to="#">Create Practical</Link>
                </h3>
              </div>
              <div className="all-lists">
                <div className="assignments-container">
                  <h3>Assignments</h3>
                  <div className="assignments-list">
                    <ul className="list-container">
                      {assignments.map((assi) => {
                        const { id, assigmentname } = assi;
                        return (
                          <li key={id} className="list-box">
                            <Link to={`assignment/${id}`}>
                              <MdIcons.MdAssignment className="icon" />
                              <span>{assigmentname}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="assignments-container">
                  <h3>Notes</h3>
                  <div className="assignments-list">
                    <ul className="list-container">
                      {assignments.map((assi) => {
                        const { id, assigmentname } = assi;
                        return (
                          <li key={id} className="list-box">
                            <Link to="#">
                              <MdIcons.MdAssignment className="icon" />
                              <span>{assigmentname}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div className="assignments-container">
                  <h3>Practicals</h3>
                  <div className="assignments-list">
                    <ul className="list-container">
                      {assignments.map((assi) => {
                        const { id, assigmentname } = assi;
                        return (
                          <li key={id} className="list-box">
                            <Link to="#">
                              <MdIcons.MdAssignment className="icon" />
                              <span>{assigmentname}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Classroom;
