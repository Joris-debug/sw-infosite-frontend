import {useState, useEffect} from "react";
import classes from "./ElementList.module.css"
import classes2 from "./AllSpaceships.module.css"
import DisplayVehicle from "../layout/user interface/DisplayVehicle";

function AllShipsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVehicles, setLoadedVehicles] = useState({});
    const [pageCount, setPageCount] = useState(((window.location.href.split('/'))[4]));
    const [vehicleShipSwitch, setVehicleShipSwitch] = useState('ships')
    
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3001/transportList/${vehicleShipSwitch}/${pageCount}`
        ).then(response => {
            return response.json();
        }).then(data => {

            setIsLoading(false)
            setLoadedVehicles(data)
        })
    }, [pageCount, vehicleShipSwitch])


    if (isLoading) {
        return (
            <section>
                <p>loading...</p>
            </section>
        )
    }
    
    const handleChange = event => {
        setVehicleShipSwitch(event.target.value);
    }

    return (
        <div className={classes.List}>
            <h1>Page: {pageCount}</h1>
            <div className={classes2.radioForm}>       
                <form>
                    <p>Select what you're searching for:</p>
                    <fieldset>
                        <div className={classes2.bundle}>
                            <input type="radio" id="ship" name="showMode" value="ships" onChange={handleChange} checked={vehicleShipSwitch === 'ships'}/>
                            <label for="ship"> Ships</label>
                        </div>
                        <div className={classes2.bundle}>
                            <input type="radio" id="vehi" name="showMode" value="vehicles" onChange={handleChange} checked={vehicleShipSwitch === 'vehicles'}/>
                            <label for="vehi"> Vehicles</label>
                        </div>
                    </fieldset>
                </form>
            </div>

            {loadedVehicles.result.map(vehicle =>
                <DisplayVehicle vehicle={vehicle}/>
            )}
            <div className={classes.buttonContainer}>
                <button onClick={previousPageHandler}>Previous Page</button>
                <button onClick={nextPageHandler}>Next Page</button>
            </div>
        </div>
    )

    function previousPageHandler(){
        if(Number(pageCount) > 1)
            setPageCount(Number(pageCount) - 1);
    }
    function nextPageHandler(){
        if(Number(pageCount) * 10 < loadedVehicles.count)
            setPageCount(Number(pageCount) + 1);
    }       
    
}

export default AllShipsPage;
