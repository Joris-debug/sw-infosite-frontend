import React from "react";
import classes from "./DisplayMovie.module.css";
import DisplayCard from "./DisplayCard";
import {Link} from "react-router-dom";
import {addToFavorites, isAlreadyFavorite, removeFromFavorites} from "./addToFavorites";

function DisplayMovie(props) {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    return (
        <div className={classes.description}>
            <h2>episode: {props.movie.episode_id}</h2>
            <DisplayCard>
                <div className={classes.descriptionHeader}>
                    <h1>Star Wars: {props.movie.title}</h1>
                    <img src={"/movie-camera.png"} alt="Type: Movie"></img>
                </div>
                <p>opening crawl:<br/>{props.movie.opening_crawl}</p>
                <p>release date: {props.movie.release_date}</p>
                <p>producer: {props.movie.producer}</p>
                <p>directed by: {props.movie.director}</p>
                <div className={classes.elementList}>
                    <p>characters:</p>
                    <ul> {props.movie.characters.map(character =>
                        <li><Link to={`/character/${character.person_id}`}>{character.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.elementList}>
                    <p>Planets:</p>
                    <ul> {props.movie.planets.map(planet =>
                        <li><Link to={`/planet/${planet.planet_id}`}>{planet.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.elementList}>
                    <p>Vehicles:</p>
                    <ul> {props.movie.vehicles.map(vehicle =>
                        <li><Link to={`/transport/${(vehicle.isShip===true) ? "ship" : "vehicle"}/${vehicle.vehicle_id}`}>{vehicle.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={() => 
                    {isAlreadyFavorite(props.movie, "movie") ?  removeFromFavorites(props.movie, "movie") : addToFavorites(props)
                    forceUpdate()
                    }}>{isAlreadyFavorite(props.movie, "movie") ? "Remove Bookmark" : "Add Bookmark"}</button>
                </div>
            </DisplayCard>
        </div>
    )
}

export default DisplayMovie;
