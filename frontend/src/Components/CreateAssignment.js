import React from "react";
import "./CreateAssignment.css";
const CreateAssignment = () => {
  return (
    <div className="container">
      <div className="title">Assignment</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">Title</span>
              <input type="text" placeholder="Enter the Title" />
            </div>
            <div className="input-box">
              <span className="details">Description</span>
              <input type="text" placeholder="Enter the Description" required />
            </div>
            <div className="input-box">
              <span className="details">Upload File</span>
              <input type="file" className="custom-file-upload " required />
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

export default CreateAssignment;
