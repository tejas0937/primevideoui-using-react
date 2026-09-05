import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/movies"
                    element={<Movies />}
                />

                <Route
                    path="/tv-shows"
                    element={<TVShows />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;