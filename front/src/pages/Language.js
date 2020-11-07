import React, { useState, useEffect } from 'react';

export default function Language() {
  const data = {
    languages: {
      primary_locale: { country: 'BR', language: 'pt' },
      supported_locales: [
        { country: 'BR', language: 'pt' },
        { country: 'US', language: 'en' },
      ],
      profile_languages: [],
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
              Languages
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
          <div className='p-2 d-flex flex-row justify-content-center'>
            <div>
              <strong className='pr-4'>Primary Language</strong>
            </div>
            <div>
              <span>
                {data.languages.primary_locale.language} (
                {data.languages.primary_locale.country})
              </span>
            </div>
          </div>
          {data.languages.profile_languages.length > 0 && (
            <div
              style={{
                fontWeight: '200',
                letterSpacing: '0.07em',
                textAlign: 'center',
                marginTop: '1rem',
                textTransform: 'uppercase',
              }}
            >
              <p>Profile Languages</p>
            </div>
          )}
          {data.languages.profile_languages?.map((item, key) => {
            return (
              <div
                key={key + `${item}`}
                className='p-2 d-flex flex-row justify-content-center'
              >
                <div>
                  <strong className='pr-4'>Language</strong>
                </div>
                <div>
                  <span>
                    {item.language} ({item.country})
                  </span>
                </div>
              </div>
            );
          })}
          {data.languages.supported_locales.length > 0 && (
            <div
              style={{
                fontWeight: '200',
                letterSpacing: '0.07em',
                textAlign: 'center',
                marginTop: '1rem',
                textTransform: 'uppercase',
              }}
            >
              <p>SUPPORTED locales</p>
            </div>
          )}
          {data.languages.supported_locales?.map((item, key) => {
            return (
              <div
                key={key + `${item}`}
                className='p-2 d-flex flex-row justify-content-center'
              >
                <div>
                  <strong className='pr-4'>Language</strong>
                </div>
                <div>
                  <span>
                    {item.language} ({item.country})
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
