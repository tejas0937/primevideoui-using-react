import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import movies from "../data/movies";

function TVShows() {

    const shows = movies.filter(
        movie =>
            movie.category === "Amazon Originals" ||
            movie.category === "Trending Now"
    );

    return (
        <>
            <Navbar />

            <div className="page">

                <h1>TV Shows</h1>

                <div className="movie-grid">

                    {shows.map(movie => (
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

export default TVShows;