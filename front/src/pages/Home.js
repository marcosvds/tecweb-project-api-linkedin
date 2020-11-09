import React, { useState, useEffect, useContext, useRef } from "react";
import api from "../api";
import { Context } from "../Context/AuthContext";
import history from "../history";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const linkedInCompany = useRef("");

  const { handleLogout, handleRefresh, handleCompany } = useContext(Context);
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              backgroundColor: "#3b4b5b",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              border: "none",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              margin: "0.1rem 0.5rem",
              borderRadius: "2rem",
              fontSize: "0.8rem",
            }}
            onClick={handleLogout}
            to={"/login"}
          >
            Logout
          </button>
          <button
            style={{
              backgroundColor: "#0c0d0c",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              border: "none",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              margin: "0.1rem 0.5rem",
              borderRadius: "2rem",
              fontSize: "0.8rem",
            }}
            onClick={handleRefresh}
          >
            UPTADE MY DATA
          </button>
        </div>
        <div>
          <p
            style={{
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "1.2rem",
              fontWeight: "900",
              padding: "2rem",
            }}
            className="h4 text-center"
          >
            LinkedIn API
          </p>
        </div>
        <label className="mr-4">
          To look in information at company,{" "}
          <strong>insert url company of the linkedIn.</strong>
        </label>
        <label style={{ color: "#c4c4c4", fontSize: "0.8rem" }}>
          An example is{" "}
          <strong>https://www.linkedin.com/company/microsoft/</strong>
        </label>
        <div
          style={{
            display: "flex",
            backgroundColor: "#d4d8da",
            padding: "0.5rem",
            borderRadius: "0.2rem",
          }}
        >
          <input
            type="url"
            className="form-control"
            onChange={(e) =>
              (linkedInCompany.current = e.target.value.match(
                /\/company\/(.*)\//
              )[1])
            }
          />
          <button
            style={{
              backgroundColor: "#c4c4c4",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              border: "none",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              margin: "0.1rem 0.5rem",
              borderRadius: "2rem",
              fontSize: "0.8rem",
            }}
            onClick={handleCompany(linkedInCompany.current)}
          >
            Search
          </button>
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
          <label className="mr-4">To acess your your skills:</label>
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
        <div className="p-3">
          <label className="mr-4">To acess your educational experiences:</label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/education");
              window.location.reload(true);
            }}
          >
            EDUCATION
          </button>
        </div>
        <div className="p-3">
          <label className="mr-4">To acess your posts:</label>
          <button
            style={style.button}
            className="btn btn-primary"
            type="button"
            onClick={() => {
              history.push("/personal/treasurymedia");
              window.location.reload(true);
            }}
          >
            TREASURY MEDIA
          </button>
        </div>
      </div>
    </div>
  );
}
