import "./Hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-overlay">

                <div className="hero-content">

                    <h1>
                        The Family Man
                    </h1>

                    <div className="hero-info">

                        <span>IMDb 8.7</span>
                        <span>2019</span>
                        <span>2 Seasons</span>
                        <span>16+</span>

                    </div>

                    <p>
                        A middle-class man secretly works as an
                        intelligence officer while trying to balance
                        his family life.
                    </p>

                    <div className="hero-buttons">

                        <button className="watch-btn">
                            ▶ Watch Now
                        </button>

                        <button className="list-btn">
                            + Watchlist
                        </button>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default Hero;