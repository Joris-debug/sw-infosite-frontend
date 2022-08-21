import {useState, useEffect} from "react";
import classes2 from "./AllSpaceships.module.css"
import { getFavoritesObject } from "../layout/user interface/addToFavorites";
import DisplayMovie from "../layout/user interface/DisplayMovie";

function BookmarksPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const [itemSwitch, setItemSwitch] = useState('movie')
    
    useEffect(() => {
        setIsLoading(true)
        let FavoritesObject = getFavoritesObject();

        FavoritesObject.movieArray.map(async item => {
        let data = await fetch(`http://localhost:3001/${itemSwitch}/${item.id}`)
        setLoadedItems(setLoadedItems.push(data))
        })
        setIsLoading(false)
            
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
    }



    return (
        <div>
            <div className={classes2.radioForm}>       
                <form>
                    <p>Select what you're searching for:</p>
                    <fieldset>
                        <div className={classes2.bundle}>
                            <input type="radio" id="movie" name="showMode" value="movie" onChange={handleChange} checked/>
                            <label for="movie"> Movies</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="char" name="showMode" value="character" onChange={handleChange} />
                            <label for="char"> Characters</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="vehi" name="showMode" value="vehicle" onChange={handleChange} />
                            <label for="vehi"> Vehicles</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="planet" name="showMode" value="planet" onChange={handleChange} />
                            <label for="planet"> Planets</label>
                        </div>
                    </fieldset>
                </form>
            </div>
            {loadedItems.map(movie =>
            <DisplayMovie movie={movie}/>
            )}

        </div>
    )
}

export default BookmarksPage;
