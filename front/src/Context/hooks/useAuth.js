import { useState, useEffect } from 'react';
import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  async function handleLogin(email, password) {
    const { data } = await api.post('/auth/authenticate', {
      email,
      password,
    });
    api.defaults.headers.Authorization = `Bearer ${JSON.stringify(data.token)}`;

    localStorage.setItem('token', JSON.stringify(data.token));
    setAuthenticated(true);
    history.push('./home');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
