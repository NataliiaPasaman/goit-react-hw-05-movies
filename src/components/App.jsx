import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import NotFound from "path/to/pages/NotFound";

export const App = () => {

    return (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Route>
        </Routes>
      </div>
    );
}


/** У застосунку повинні бути такі маршрути. 
 * Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

/movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
/movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails. */
