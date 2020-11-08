import { useState, useEffect, useRef } from "react";
import api from "../../api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = useRef({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  async function handleLogin(email, password) {
    data.current = await api.post("/auth/authenticate", {
      email,
      password,
    });
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    localStorage.setItem("token", data.token);
    setAuthenticated(true);
    history.push("/home");
    window.location.reload(true);
  }

  async function handleProfile() {
    data.current = await api.get("/personal/profile");
    history.push("/personal/profile");
    window.location.reload(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
    window.location.reload(true);
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    handleProfile,
    data,
  };
}
