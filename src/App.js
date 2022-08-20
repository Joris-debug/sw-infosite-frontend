import './App.module.css';
import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AllMoviesPage from "./pages/allMovies";
import AllPlanetsPage from "./pages/AllPlanets";
import AllShipsPage from "./pages/AllSpaceships";
import AllCharactersPage from "./pages/AllCharacters";
import BookmarksPage from "./pages/Bookmarks";
import MoviePage from "./pages/MoviePage";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import classes from "./App.module.css";
import Contacts from "./pages/Contacts";
import CharacterPage from "./pages/CharacterPage";
import PlanetPage from "./pages/PlanetPage";
import VehiclePage from "./pages/VehiclePage";

function App() {
    return (
        <div className={classes.appContainer}>
            <Navigation></Navigation>
            <div className={classes.content}>
                <Routes>
                    <Route path="/movie/:id" element={<MoviePage/>}></Route>
                    <Route path="/transport/:category/:id" element={<VehiclePage/>}></Route>
                    <Route path="/character/:id" element={<CharacterPage/>}></Route>
                    <Route path="/planet/:id" element={<PlanetPage/>}></Route>
                    <Route path="/contact" element={<Contacts/>}></Route>
                    <Route path="/bookmarks" element={<BookmarksPage/>}></Route>
                    <Route path="/allPlanets/:page" element={<AllPlanetsPage/>}></Route>
                    <Route path="/allShips/:page" element={<AllShipsPage/>}></Route>
                    <Route path="/allCharacters/:page" element={<AllCharactersPage/>}></Route>
                    <Route path="/" element={<AllMoviesPage/>}></Route>
                </Routes>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
