import classes from "./Navigation.module.css";
import {Link} from "react-router-dom";        
                                              
function Navigation() {                       
    return (
        <div className={classes.header}>
            <div className={classes.logoDiv}>
                <img className={classes.logo} src="/icons8-chewbacca-120.png" alt={"logo"}></img>
                <div className={classes.title}>
                    Star Wars infosite
                </div>
            </div>
            <ul>
                <li>
                    <Link to={"/"}>Movies</Link>
                </li>
                <li>
                    <Link to={"/allCharacters/1"}>Characters</Link>
                </li>
                <li>
                    <Link to={"/allShips/1"}>Vehicles</Link>
                </li>
                <li>
                    <Link to={"/allPlanets/1"}>Planets</Link>
                </li>
                <li>
                    <Link to={"/bookmarks"}>Bookmarks</Link>
                </li>
            </ul>
        </div>

    )
}

export default Navigation;
