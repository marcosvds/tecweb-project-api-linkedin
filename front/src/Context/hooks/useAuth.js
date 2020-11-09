import { useState, useEffect } from "react";
import api from "../../api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  async function handleLogin(email, password) {
    const { data } = await api.post("/auth/authenticate", {
      email,
      password,
    });
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    localStorage.setItem("token", data.token);
    setAuthenticated(true);
  }

  async function handleRegister(email, password, name, linkedinId) {
    const { data } = await api.post("auth/register", {
      email,
      password,
      name,
      linkedinId,
    });
    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    localStorage.setItem("token", data.token);
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
    window.location.reload(true);
  }

  async function handleProfile() {
    return await api.get("/personal/profile").then((response) => {
      return response.data;
    });
  }

  async function handleLocation() {
    return await api.get("/personal/location").then((response) => {
      return response.data;
    });
  }

  async function handleLanguage() {
    return await api.get("/personal/languages").then((response) => {
      return response.data;
    });
  }

  async function handlePositionGroups() {
    return await api.get("/personal/positionGroups").then((response) => {
      return response.data;
    });
  }

  async function handleEducation() {
    return await api.get("/personal/education").then((response) => {
      return response.data;
    });
  }

  async function handleSkills() {
    return await api.get("/personal/skills").then((response) => {
      return response.data;
    });
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
    handleProfile,
    handleLocation,
    handleLanguage,
    handlePositionGroups,
    handleEducation,
    handleSkills,
  };
}
