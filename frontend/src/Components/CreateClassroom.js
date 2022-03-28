import React from "react";
import "./CreateClassroom.css";
const CreateClassroom = () => {
  return (
    <div className="container">
      <div className="title">Create Class</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Class Name</span>
              <input type="text" placeholder="Enter the Class name" required />
            </div>
            <div className="input-box">
              <span className="details">Subject</span>
              <input type="text" placeholder="Enter the Subject" required />
            </div>
            <div className="input-box">
              <span className="details">Room</span>
              <input type="text" placeholder="Enter the number" required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClassroom;
