import React, { useState, useEffect, useContext } from "react";
import api from "../api";
import { Context } from "../Context/AuthContext";
import history from "../history";

export default function Home() {
  const [userData, setUserData] = useState([]);

  const { handleLogout, handleProfile } = useContext(Context);
  // const data = {
  //   user: {
  //     _id: "5fa54d7435423d85f08d3983",
  //     name: "TCHIsdfghjkTrrCHhjkERO",
  //     email: "olrbbab@testei.com",
  //     createdAt: "2020-11-06T13:19:48.931Z",
  //     __v: 0,
  //   },
  //   token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTU0ZDc0MzU0MjNkODVmMDhkMzk4MyIsImlhdCI6MTYwNDY2ODc5OSwiZXhwIjoxNjA0NzU1MTk5fQ.4FqaRQFtMjJEwHb4PEQcBdJdY4l0eEz5JfTW_dZyxeg",
  // };

  const style = {
    button: {
      backgroundColor: "#c93b59",
      letterSpacing: "0.07em",
      textTransform: "uppercase",
      border: "none",
    },
  };

  return (
    <div style={{ fontFamily: "Lato" }} className="container p-3">
      <div className="d-flex flex-column">
        <div>
          <button onClick={handleLogout} to={"/login"}>
            Logout
          </button>
        </div>
        <div>
          <p
            style={{ letterSpacing: "0.1em", textTransform: "uppercase" }}
            className="h4 text-center"
          >
            LinkedIn API
          </p>
        </div>
        <div>
          <p className="h3">Hello, friend</p>
        </div>
        <div className="p-3">
          <label className="mr-4">
            To see your photo, name, birth, industry and summary:
          </label>
          <button
            style={style.button}
            className="btn btn-primary m-2"
            type="button"
            onClick={() => {
              history.push("/personal/profile");
              window.location.reload(true);
            }}
          >
            Profile
          </button>
        </div>
        <div className="p-3">
          <label className="mr-4">To acess location:</label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/location");
              window.location.reload(true);
            }}
          >
            Location
          </button>
        </div>
        {/* <div className='p-3'>
          <label className='mr-4'>To acess treasury media:</label>
          <button
            style={style.button}
            className='btn btn-primary'
            type='button'
          >
            Treasury Media
          </button>
        </div> */}
        <div className="p-3">
          <label className="mr-4">To see your languages: </label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/languages");
              window.location.reload(true);
            }}
          >
            Languages
          </button>
        </div>
        <div className="p-3">
          <label className="mr-4">
            To acess your professional experiences:
          </label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/positiongroups");
              window.location.reload(true);
            }}
          >
            position groups
          </button>
        </div>
        <div className="p-3">
          <label className="mr-4">
            To acess your your skills:
          </label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/skills");
              window.location.reload(true);
            }}
          >
            SKILLS
          </button>
        </div>
      </div>
    </div>
  );
}
