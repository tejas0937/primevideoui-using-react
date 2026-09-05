import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

import movies from "../data/movies";

function Home() {

    const popularMovies = movies.filter(
        movie => movie.category === "Popular Movies"
    );

    const trendingMovies = movies.filter(
        movie => movie.category === "Trending Now"
    );

    const originals = movies.filter(
        movie => movie.category === "Amazon Originals"
    );

    const actionMovies = movies.filter(
        movie => movie.category === "Action & Adventure"
    );

    return (

        <>

            <Navbar />

            <Hero />

            <main>

                <MovieRow
                    title="Popular Movies"
                    movies={popularMovies}
                />

                <MovieRow
                    title="Amazon Originals"
                    movies={originals}
                />

                <MovieRow
                    title="Trending Now"
                    movies={trendingMovies}
                />

                <MovieRow
                    title="Action & Adventure"
                    movies={actionMovies}
                />

            </main>

        </>

    );
}

export default Home;