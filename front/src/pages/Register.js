import React, { useContext, useRef } from "react";
import { Context } from "../Context/AuthContext";
import history from "../history";

export default function Register() {
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  const linkedIn = useRef("");
  const passwordRepeated = useRef("");
  const { authenticated, handleRegister } = useContext(Context);

  return (
    <div style={{ fontFamily: "Lato" }} className="container p-3">
      <div className="row">
        <div className="col">
          <p className="text-center">Register</p>
          <form>
            <div className="form-group">
              <label>Nome</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => (name.current = e.target.value)}
                required
              />
              <label>E-mail</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => (email.current = e.target.value)}
                required
              />

              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (password.current = e.target.value)}
                required
              />

              <label>Confirmar Senha</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (passwordRepeated.current = e.target.value)}
                required
              />

              <label>URL do LinkedIn</label>
              <input
                type="url"
                className="form-control"
                onChange={(e) => {
                  linkedIn.current = e.target.value.match(/\/in\/(.*)\//)[1];
                }}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
                type="button"
                onClick={() => {
                  handleRegister(email.current, password.current).then(() => {
                    history.push("/home");
                    window.location.reload(true);
                  });
                }}
              >
                Enter
              </button>
            </div>
            <span>
              Do you have account? <a href="/login">Login</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
