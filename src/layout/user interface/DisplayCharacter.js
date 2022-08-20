import classes from "./DisplayCharacter.module.css";
import DisplayCard from "./DisplayCard";
import {Link} from "react-router-dom";
import addToFavorites from "./addToFavorites";
function DisplayCharacter(props) {
    return (
        <div className={classes.description}>
            <DisplayCard>
                <div className={classes.descriptionHeader}>
                    <h1>name: {props.character.name}</h1>
                    <img src={"/character.png"} alt="Type: Character"></img>
                </div>
                <p>gender: {props.character.gender}</p>
                <p>height: {props.character.height} cm</p>
                <p>mass: {props.character.mass} kg</p>
                <p>hair: {props.character.hair_color}</p>
                <p>skin: {props.character.skin_color}</p>
                <p>eyes: {props.character.eye_color}</p>
                <p>birth year: {props.character.birth_year}</p>
                <p>homeworld: <Link to={`/planet/${props.character.homeworld.planet_id}`}>{props.character.homeworld.name}</Link></p>
                <div className={classes.elementList}>
                    <p>films:</p>
                    <ul> {props.character.films.map(movie =>
                        <li><Link to={`/movie/${movie.movie_id}`}>{movie.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.elementList}>
                    <p>Vehicles:</p>
                    <ul> {props.character.vehicles.map(vehicle =>
                        <li><Link to={`/transport/${(vehicle.isShip===true) ? "ship" : "vehicle"}/${vehicle.vehicle_id}`}>{vehicle.name}</Link></li>
                    )}</ul>
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={() => addToFavorites(props)}>Add to Favorites</button>
                </div>
            </DisplayCard>
        </div>
    )
}

export default DisplayCharacter;
