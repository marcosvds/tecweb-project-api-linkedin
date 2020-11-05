import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes } from './navigation/Routes';
import Home from './view';
import { Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
}
// <div className='App'>
//   <header className='App-header'>
//     <img src={logo} className='App-logo' alt='logo' />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className='App-link'
//       href='https://reactjs.org'
//       target='_blank'
//       rel='noopener noreferrer'
//     >
//       Learn React
//     </a>
//   </header>
// </div>

// var unirest = require('unirest');

// var req = unirest('GET', 'https://rapidapi.p.rapidapi.com/rapidapi/');

// req.query({
//   profileId: 'luiz-felipe-lazzaron-682676181',
// });

// req.headers({
//   'x-rapidapi-key': '8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6',
//   'x-rapidapi-host': 'linkedin-public-profiles.p.rapidapi.com',
//   useQueryString: true,
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(JSON.stringify(res.body));
// });
