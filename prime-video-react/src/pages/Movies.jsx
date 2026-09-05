import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import movies from "../data/movies";

function Movies() {

    const movieList = movies.filter(
        movie => movie.category !== "TV Shows"
    );

    return (
        <>
            <Navbar />

            <div className="page">

                <h1>Movies</h1>

                <div className="movie-grid">

                    {movieList.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}

                </div>

            </div>
        </>
    );
}

export default Movies;