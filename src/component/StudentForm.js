import React, { useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:8999");

const StudentForm = () => {
  const [name, setname] = useState();
  const [sex, setsex] = useState();
  const [age, setage] = useState();

  const handeNameChange = (e) => {
    setname(e.target.value);
  };
  const handleAgeChange = (e) => {
    setage(e.target.value);
  };

  const handleSelectChange = (e) => {
    setsex(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, sex, age });
    socket.emit("upload", { name, sex, age });
    setname("");
    setsex("");
    setage("");
  };

  return (
    <div className="container">
      <form
        className="form-container "
        style={{
          width: "600px",
          margin: "0 auto",
          marginTop: "100px",
        }}
        onSubmit={handleSubmit}
      >
        <div className="m-1">
          <input
            className="form-control "
            type="text"
            value={name}
            onChange={handeNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="m-1">
          <select
            className="form-control"
            id="postAuthor"
            value={sex}
            onChange={handleSelectChange}
          >
            <option value="">Select gender</option>
            <option value="f">F</option>
            <option value="m">M</option>
          </select>
        </div>
        <div className="m-1">
          <input
            className="form-control"
            type="text"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
        </div>
        <input
          type="submit"
          value="Create Student"
          className="btn btn-primary"
          style={{ marginTop: "20px" }}
        />
      </form>
    </div>
  );
};

export default StudentForm;
