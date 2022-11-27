import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
