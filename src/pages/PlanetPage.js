import {useState, useEffect} from "react";
import DisplayPlanet from "../layout/user interface/DisplayPlanet";

function PlanetPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPlanet, setLoadedPlanet] = useState({});
    useEffect(() => {

        const planet_id = (window.location.href.split('/'))[4];
        fetch(`http://localhost:3001/planet/${planet_id}`
        ).then(response => {
            return response.json();
        }).then(data => {
            const planetObject = {
                ...data
            }
            setLoadedPlanet(planetObject);
            setIsLoading(false);
        })
    }, [])


    if (isLoading) {
        return (
            <div>
                <p>loading...</p>
            </div>
        )
    }

    return (
        <div>
            <DisplayPlanet planet={loadedPlanet}/>
        </div>
    )
}

export default PlanetPage;
