
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './Components/Layout.js'
import Home from './Components/home/Home.js';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/header/Header.js';
import Trailer from './Components/trailer/Trailer';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {
      const response = await api.get("movies");

      console.log(response.data);

      setMovies(response.data);

    } catch (err) {
      console.log(err);
    }

    
  }

  useEffect(() => {
    getMovies();
  },[])


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer></Trailer>}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
