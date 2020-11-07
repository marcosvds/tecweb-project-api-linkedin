import React, { useState, useEffect } from 'react';

export default function Location() {
  const data = {
    location: {
      country: 'Brazil',
      short: 'São Paulo, São Paulo',
      default: 'São Paulo, São Paulo, Brazil',
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
              Location
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
              <strong className='pr-4'>País</strong>
            </div>
            <div>
              <span>{data.location.country}</span>
            </div>
          </div>
          <div className='p-2 d-flex flex-row justify-content-center'>
            <div>
              <strong className='pr-4'>Cidade/Estado</strong>
            </div>
            <div>
              <span>{data.location.short}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
