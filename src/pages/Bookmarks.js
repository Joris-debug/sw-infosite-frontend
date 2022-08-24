import {useState, useEffect} from "react";
import classes2 from "./AllSpaceships.module.css"
import { getFavoritesObject } from "../layout/user interface/addToFavorites";
import DisplayMovie from "../layout/user interface/DisplayMovie";
import DisplayCharacter from "../layout/user interface/DisplayCharacter";
import DisplayVehicle from "../layout/user interface/DisplayVehicle";
function BookmarksPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const [itemSwitch, setItemSwitch] = useState("movie")
    

    useEffect( () => {
        setIsLoading(true)
        const fetchData = async () => {
            let FavoritesObject = getFavoritesObject();
            let arrayForObjects = [];
            console.log(FavoritesObject.vehicleArray)
            switch(itemSwitch)
            {
                case "movie":
                    await Promise.all (FavoritesObject.movieArray.map(async item => {
                    let data = await fetch(`http://localhost:3001/${itemSwitch}/${item.id}`)
                    data = await data.json(); 
                    arrayForObjects.push(data)
                    }))
                    break;
                case "character":
                    await Promise.all (FavoritesObject.characterArray.map(async item => {
                        let data = await fetch(`http://localhost:3001/${itemSwitch}/${item.id}`)
                        data = await data.json(); 
                        arrayForObjects.push(data)
                        }))
                    break;
                    case "transport":
                        await Promise.all (FavoritesObject.vehicleArray.map(async item => {
                            console.log(`http://localhost:3001/${itemSwitch}/${item.isShip ? "ship" : "vehicle"}/${item.id}`)
                            let data = await fetch(`http://localhost:3001/${itemSwitch}/${item.isShip ? "ship" : "vehicle"}/${item.id}`)
                            data = await data.json(); 
                            arrayForObjects.push(data)
                            }))
                        break;
                default:
                    break;
            }

            setLoadedItems(arrayForObjects)
            setIsLoading(false)
    
        };
        fetchData()
    }, [itemSwitch])
    

    if (isLoading) {
        return (
            <section>
                <p>loading...</p>
            </section>
        )
    }
    
    const handleChange = event => {
        setItemSwitch(event.target.value);
        setLoadedItems([]);
    }

    
    return (
        <div>
            <div className={classes2.radioForm}>       
                <form>
                    <p>Select what you're searching for:</p>
                    <fieldset>
                        <div className={classes2.bundle}>
                            <input type="radio" id="movie" name="showMode" value="movie" onChange={handleChange} checked={itemSwitch === 'movie'}/>
                            <label> Movies</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="char" name="showMode" value="character" onChange={handleChange} checked={itemSwitch === 'character'}/>
                            <label> Characters</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="vehic" name="showMode" value="transport" onChange={handleChange} checked={itemSwitch === 'transport'}/>
                            <label> Vehicles</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="planet" name="showMode" value="planet" onChange={handleChange} checked={itemSwitch === 'planet'}/>
                            <label> Planet</label>
                        </div>
                    </fieldset>
                </form>
            </div>
            
            {loadedItems.map(item =>{
                console.log(item)
                switch(itemSwitch)
                {
                    case "movie":
                        return(<DisplayMovie movie={item}/>)
                    case "character":
                        return(<DisplayCharacter character={item}/>)
                    case "transport":
                        return(<DisplayVehicle vehicle={item}/>)
                    default:
                        break;
                }
                return false;
            }            
            )}

        </div>
    )
}

export default BookmarksPage;
