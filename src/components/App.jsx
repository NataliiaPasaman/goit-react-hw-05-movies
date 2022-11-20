import { Route, Routes, Link } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {

    return (
      <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    );
}


/** У застосунку повинні бути такі маршрути. 
 * Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

'/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
'/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
'/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
/movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
/movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails. */



{/* <div
style={{
  padding: '25px',
  fontSize: 40,
  color: '#010101',
}}
>
</div> */}