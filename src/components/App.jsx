import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  const [movieId, setMovieId] = useState('');
  const getId = (id) => {setMovieId(id)}

    return (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails getId={getId}/>}>
              <Route path="cast" element={<Cast movieId={movieId}/>} />
              <Route path="reviews" element={<Reviews movieId={movieId}/>} />
            </Route>
            <Route path="*" element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </div>
    );
}
