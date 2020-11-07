import React, { useState, useEffect } from 'react';
import api from '../api';

export default function Home() {
  const [userData, setUserData] = useState([]);

  const dataExample = {
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

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await api.get('/home');
  //     setUserData(data);
  //   })();
  // }, []);

  const style = {
    button: {
      backgroundColor: '#c93b59',
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      border: 'none',
    },
  };

  return (
    <div style={{ fontFamily: 'Lato' }} className='container p-3'>
      <div className='d-flex flex-column'>
        <div>
          <p
            style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
            className='h4 text-center'
          >
            LinkedIn API
          </p>
        </div>
        <div>
          <p className='h3'>Olá, user</p>
        </div>
        <div>
          <label className='mr-4'>
            Para acessar a foto, o nome, data de nascimento e tipo de perfil:
          </label>
          <button
            style={style.button}
            className='btn btn-primary m-2'
            type='button'
          >
            Profile
          </button>
        </div>
        <div>
          <label className='mr-4'>Para acessar localização:</label>
          <button
            style={style.button}
            className='btn btn-primary'
            type='button'
          >
            Location
          </button>
        </div>
      </div>
    </div>
  );
}
