import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicList from './Components/MusicList'
import NavList from './Components/NavList'
import { MovieProvider } from './Components/MovieContext';
import AddMusic from './Components/AddMusic';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <NavList />
      <AddMusic />
      <MusicList />

    </div>
    </MovieProvider>
  )
}

export default App
