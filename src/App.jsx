import { useState, useEffect } from 'react'
import './App.css'

import MovieDisplay from './components/MovieDisplay.jsx'
import Form from './components/Form.jsx'

function App() {

  //const with the API key
  const apiKey = "ca4a1533";

  //states
  const [movie, setMovie] = useState(null);

  //get movies
  const getMovie = async(searchTerm) => {
    try{
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);

    const data = await response.json();
    
      setMovie(data);
    } catch(error) {
      console.error(error);
    }
  }

    useEffect(() => {
      getMovie('Clueless');
    }, []);
  

  return (
    <>
      <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie} />
      </div>
      
    </>
  );
}


export default App
