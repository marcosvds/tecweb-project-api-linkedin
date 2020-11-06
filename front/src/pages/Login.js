import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col'>
          <p className='text-center'>Login</p>
          <form>
            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                className='form-control'
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Senha</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='btn btn-primary' type='button'>
              Enter
            </button>
          </form>
        </div>
      </div>{' '}
    </div>
  );
}
