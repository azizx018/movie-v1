
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

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
      <Routes>
        <Route path="/" element={Layout}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
