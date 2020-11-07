import React, { useState, useEffect } from 'react';

export default function Profile() {
  const data = {
    profile: {
      first_name: 'Luiz Felipe',
      last_name: 'Lazzaron',
      birth_date: null,
      profile_picture:
        'https://media-exp1.licdn.com/dms/image/C4E03AQEBDvzstEKE1A/profile-displayphoto-shrink_400_400/0?e=1609977600&v=beta&t=68YYDI8uknk1N2fJfO00339j3NOdUmyi5NZjQH4Wexs',
      premium: false, //perfil
      influencer: false, //perfil
      summary:
        'Um dos fundadores da Preparo. Sou apaixonado por Engenharia, Design e Empreendedorismo. Meu sonho é ajudar e possibilitar os jovens a conquistarem a carreira e profissão que tanto sonham.',
    },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTU0ZDc0MzU0MjNkODVmMDhkMzk4MyIsImlhdCI6MTYwNDY2ODc5OSwiZXhwIjoxNjA0NzU1MTk5fQ.4FqaRQFtMjJEwHb4PEQcBdJdY4l0eEz5JfTW_dZyxeg',
  };

  return (
    <div style={{ fontFamily: 'Lato' }}>
      <div
        style={{
          backgroundColor: '#f1f1f1',
          borderRadius: '0px 0px 20px 0px',
        }}
        className='container p-3'
      >
        <div className='d-flex flex-column'>
          <div>
            <a href='/home'>back</a>
          </div>
          <div>
            <p
              style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
              className='h4 text-center'
            >
              Profile
            </p>
          </div>
          <div className='text-center'>
            <img
              style={{ width: '200px', borderRadius: '100px' }}
              className='border mx-auto d-block'
              src={data.profile.profile_picture}
              alt={data.profile.first_name + data.profile.last_name + 'image'}
            />
          </div>
          <div className='text-center'>
            <p className='h5 mt-3'>
              <span>
                {data.profile.first_name} <span>{data.profile.last_name}</span>
              </span>
            </p>
          </div>
          <div className='d-flex text-center justify-content-center'>
            <p
              style={{ fontStyle: 'italic', fontWeight: '300', width: '50rem' }}
            >
              {data.profile.summary}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#f1f1f1',
          borderRadius: '0px 20px 20px 20px',
          marginTop: '2rem',
        }}
        className='container p-3'
      >
        <div className='d-flex flex-column'>
          {data.profile.birth_date && (
            <div className='p-2 d-flex flex-row justify-content-center'>
              <div>
                <strong className='pr-4'>Data de Nascimento</strong>
              </div>
              <div>
                <span>{data.profile.birth_date}</span>
              </div>
            </div>
          )}
          <div className='p-2 d-flex flex-row justify-content-center'>
            <div>
              <strong className='pr-4'>Premim</strong>
            </div>
            <div>
              <span>{data.profile.premium ? 'Sim' : 'Não'}</span>
            </div>
          </div>
          <div className='p-2 d-flex flex-row justify-content-center'>
            <div>
              <strong className='pr-4'>Influencer</strong>
            </div>
            <div>
              <span>{data.profile.influencer ? 'Sim' : 'Não'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
