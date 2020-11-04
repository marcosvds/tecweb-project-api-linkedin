import React, { useState } from 'react';

export default function Home() {
  const [id, setId] = useState('luiz-felipe-lazzaron-682676181');
  const [data, setData] = useState({});

  console.log('id:', id);

  function handleChange(value) {
    setId(value.target.value);
  }

  async function getData() {
    var unirest = require('unirest');

    var req = unirest('GET', 'https://rapidapi.p.rapidapi.com/rapidapi/');

    req.query({
      profileId: id,
    });

    req.headers({
      'x-rapidapi-key': '8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6',
      'x-rapidapi-host': 'linkedin-public-profiles.p.rapidapi.com',
      useQueryString: true,
    });

    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      setData(JSON.stringify(res.body));
    });
  }

  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col'>
          <p className='text-center'>Registration</p>
          <form>
            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                className='form-control'
                onChange={handleChange}
              />

              <label>Senha</label>
              <input
                type='password'
                className='form-control'
                onChange={handleChange}
              />

              <label>Confirme a Senha</label>
              <input
                type='password'
                className='form-control'
                onChange={handleChange}
              />
              <label>LinkedIn Id</label>
              <input
                type='text'
                className='form-control'
                onChange={handleChange}
              />
              <small className='form-text text-muted'>
                Um exemplo seria <strong>luiz-felipe-lazzaron-682676181</strong>
                . Podemos usar regex para o usuário por seu <strong>url</strong>
              </small>
            </div>
            <button
              // onClick={getData()}
              className='btn btn-primary'
            >
              Register
            </button>
          </form>
        </div>
        <div className='col'>
          <p className='text-center'>Login</p>
          <form>
            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                className='form-control'
                onChange={handleChange}
              />

              <label>Senha</label>
              <input
                type='password'
                className='form-control'
                onChange={handleChange}
              />
            </div>
            <button
              // onClick={getData()}
              className='btn btn-primary'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
