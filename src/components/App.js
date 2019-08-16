import React from 'react';
import '../public/style.css';
import Quark from '../public/quark.png';
import Nav from './Nav';
import PlayList from './PlayList';

const App = () => (
  <div>
    <img src={Quark} />
    <Nav />
    <p className='hello'>Hello webpack</p>
    <PlayList />
  </div>
)

export default App;
