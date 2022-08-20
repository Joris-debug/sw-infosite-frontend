import classes from "./DisplayCharacter.module.css";
import DisplayCard from "./DisplayCard";
import {Link} from "react-router-dom";
import {addToFavorites} from "./addToFavorites";

function DisplayPlanet(props) {
    return (
        <div className={classes.description}>
            <DisplayCard>
                <div className={classes.descriptionHeader}>
                    <h1>name: {props.planet.name}</h1>
                    <img src={"/planet.png"} alt="Type: Planet"></img>
                </div>
                <p>rotation period: {props.planet.rotation_period} hours</p>
                <p>orbital period: {props.planet.orbital_period} days</p>
                <p>diameter: {props.planet.diameter}</p>
                <p>climate: {props.planet.climate}</p>
                <p>gravity: {props.planet.gravity}</p>
                <p>terrain: {props.planet.terrain}</p>
                <p>surface water: {props.planet.surface_water} percent</p>
                <p>population: {props.planet.population}</p>
                <div className={classes.elementList}>
                    <p>residents:</p>
                    <ul> {props.planet.residents.map(character =>
                        <li><Link to={`/character/${character.person_id}`}>{character.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.elementList}>
                    <p>films:</p>
                    <ul> {props.planet.films.map(movie =>
                        <li><Link to={`/movie/${movie.movie_id}`}>{movie.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={() => addToFavorites(props)}>Add to Favorites</button>
                </div>
            </DisplayCard>
        </div>
    )
}

export default DisplayPlanet;
