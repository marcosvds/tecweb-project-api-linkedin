import React, { useState } from 'react';

export default function Home() {
  const [id, setId] = useState('luiz-felipe-lazzaron-682676181');
  const [data, setData] = useState('');

  function handleChange(value) {
    setId(value.target.value);
  }

  function getData() {
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

      console.log(JSON.stringify(res.body));
      setData(JSON.stringify(res.body));
    });
  }

  return (
    <div className='container p-3'>
      <form>
        <div className='form-group'>
          <label>Informe seu id do LinkedIn</label>
          <input type='text' className='form-control' onChange={handleChange} />
          <small className='form-text text-muted'>
            Um exemplo seria <strong>luiz-felipe-lazzaron-682676181</strong>.
            Podemos usar regex para o usuário por seu <strong>url</strong>
          </small>
        </div>
        <onClick type='submit' className='btn btn-primary'>
          Buscar
        </onClick>
      </form>
    </div>
  );
}
