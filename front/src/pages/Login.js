import React, { useContext, useRef } from "react";
import { Context } from "../Context/AuthContext";
import history from "../history";

export default function Login() {
  const email = useRef("");
  const password = useRef("");
  const { authenticated, handleLogin, handleLogout } = useContext(Context);

  return (
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <p className="text-center">Login</p>
          <form>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => (email.current = e.target.value)}
              />

              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => (password.current = e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                handleLogin(email.current, password.current).then(() => {
                  history.push("/home");
                  window.location.reload(true);
                });
              }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
