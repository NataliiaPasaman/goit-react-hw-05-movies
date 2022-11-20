import { movieAPI } from "services/api";

export const Home = () => {
    const moviesResults = movieAPI();
    console.log('moviesResults', moviesResults);
    return(
        <ul>
            {/* {moviesResults.map(movie => console.log(movie))} */}
        </ul>
    );
}

// – компонент Home, домашня сторінка зі списком популярних кінофільмів.