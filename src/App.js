import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Update from './components/Update';
import './App.css';

const profiles = [
  { 
    id: 2,
    name: 'Ed',
    birthdate: '07/03/2000'
  },
  { 
    id: 3,
    name: 'Neal',
    birthdate: '07/03/1999'
  }
]


function App() {
  return (
    <div>
      <Header name="React" />
      <main>
        <ul class="o-margin-bottom">
          <li>
            <Profile profile={profiles[0]} />
          </li>
          <li>
            <Profile profile={profiles[1]} />
          </li>
        </ul>
        <Update />
      </main>
    </div>
  );
}


export default App;