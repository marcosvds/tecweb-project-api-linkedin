import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Home() {
  const [userData, setUserData] = useState([]);

  const example = {
    user: {
      _id: '5fa54d7435423d85f08d3983',
      name: 'TCHIsdfghjkTrrCHhjkERO',
      email: 'olrbbab@testei.com',
      createdAt: '2020-11-06T13:19:48.931Z',
      __v: 0,
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTU0ZDc0MzU0MjNkODVmMDhkMzk4MyIsImlhdCI6MTYwNDY2ODc5OSwiZXhwIjoxNjA0NzU1MTk5fQ.4FqaRQFtMjJEwHb4PEQcBdJdY4l0eEz5JfTW_dZyxeg',
  };

  console.log(JSON.stringify(example));

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get('/home');
  //     setUserData(data);
  //   })();
  // }, []);

  return <h1>Home</h1>;
}
