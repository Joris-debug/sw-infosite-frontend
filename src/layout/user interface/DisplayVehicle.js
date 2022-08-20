import classes from "./DisplayCharacter.module.css";
import DisplayCard from "./DisplayCard";
import {Link} from "react-router-dom";
import {addToFavorites} from "./addToFavorites";

function DisplayVehicle(props) {
    return (
        <div className={classes.description}>
            <DisplayCard>
                <div className={classes.descriptionHeader}>
                    <h1>name: {props.vehicle.name}</h1>
                    <img src={"/starship.png"} alt="Type: Vehicle"></img>
                </div>
                <p>model: {props.vehicle.model}</p>
                <p>manufacturer: {props.vehicle.manufacturer}</p>
                <p>cost: {props.vehicle.cost_in_credits} credits</p>
                <p>length: {props.vehicle.length}m</p>
                <p>crew: {props.vehicle.crew}</p>
                <p>passengers: {props.vehicle.passengers}</p>
                <p>cargo capacity: {props.vehicle.cargo_capacity}kg</p>
                <p>consumables: {props.vehicle.consumables}</p>
                <p>hyperdrive rating: {props.vehicle.hyperdrive_rating}</p>
                <p>acceleration in space: {props.vehicle.acceleration_in_space}</p>
                <div className={classes.elementList}>
                    <p>pilots:</p>
                    <ul> {props.vehicle.pilots.map(character =>
                        <li><Link to={`/character/${character.person_id}`}>{character.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.elementList}>
                    <p>films:</p>
                    <ul> {props.vehicle.films.map(movie =>
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

export default DisplayVehicle;
