import React from "react";
import history from "../history";

export default function Initial() {
  return (
    <div style={{ fontFamily: "Lato" }} className="container p-3">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <svg
          width="153"
          height="154"
          viewBox="0 0 153 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146.88 0H6.12C2.73487 0 0 2.75275 0 6.16V147.84C0 151.247 2.73487 154 6.12 154H146.88C150.265 154 153 151.247 153 147.84V6.16C153 2.75275 150.265 0 146.88 0ZM45.3836 131.227H22.6823V57.7307H45.3836V131.227ZM34.0425 47.6823C31.4401 47.6823 28.8961 46.9055 26.7323 45.4502C24.5685 43.995 22.882 41.9265 21.8861 39.5065C20.8902 37.0865 20.6296 34.4236 21.1373 31.8545C21.645 29.2854 22.8982 26.9255 24.7384 25.0733C26.5786 23.2211 28.9231 21.9598 31.4755 21.4487C34.0279 20.9377 36.6735 21.2 39.0778 22.2024C41.4822 23.2048 43.5372 24.9023 44.983 27.0803C46.4288 29.2582 47.2005 31.8188 47.2005 34.4382C47.1814 41.7532 41.2909 47.6823 34.0425 47.6823ZM130.375 131.227H107.693V95.48C107.693 86.9522 107.54 75.999 95.8928 75.999C84.0926 75.999 82.2758 85.2775 82.2758 94.864V131.227H59.6126V57.7307H81.3769V67.7792H81.6829C84.7046 62.0042 92.106 55.902 103.16 55.902C126.149 55.902 130.375 71.1287 130.375 90.9177V131.227V131.227Z"
            fill="#0c0d0c"
          />
        </svg>
        <span style={{ fontWeight: "900", marginTop: "2rem" }}>
          API LINKEDIN
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#c93b59",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#ffffff",
              padding: "0.5rem 2rem",
              borderRadius: "10rem",
              border: "none",
              margin: "2rem 1rem",
              height: "fit-content",
            }}
            onClick={() => {
              history.push("/login");
              window.location.reload(true);
            }}
          >
            Login
          </button>
          <button
            style={{
              backgroundColor: "#3b4b5b",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#ffffff",
              padding: "0.5rem 2rem",
              borderRadius: "10rem",
              border: "none",
              height: "fit-content",
              margin: "2rem 1rem",
            }}
            onClick={() => {
              history.push("/register");
              window.location.reload(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
