import './App.css';
import {getMovieList, searchMovie} from './api'
import { useEffect, useState } from 'react';

const App = () => {
const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
  getMovieList().then((result) => {
    setPopularMovies(result)
  })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='movie-wrapper' key={i}>
            <div className='movie-title'>{movie.title}</div>
            <img className='movie-image' src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
            <div className='movie-date'>release: {movie.release_date}</div>
            <div className='movie-rate'>{movie.vote_average}</div>
          </div>
      )
    })
  }

  const search = (q) => {
  console.log({q})
  }


  return (
    <div className="App">
      <header className='App-header'>
        <h1>MOVIE MANIA</h1>
        <input placeholder='cari film favoritmu..'
          className='movie-search'
          onChange={({target}) => search(target.value)} />
        <div className='movie-container'>
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
}

export default App;
