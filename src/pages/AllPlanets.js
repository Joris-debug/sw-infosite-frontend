import {useState, useEffect} from "react";
import classes from "./ElementList.module.css"
import DisplayPlanet from "../layout/user interface/DisplayPlanet";

function AllPlanetsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPlanets, setLoadedPlanets] = useState({});
    const [pageCount, setPageCount] = useState(((window.location.href.split('/'))[4]));
    
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3001/planetList/${pageCount}`
        ).then(response => {
            return response.json();
        }).then(data => {

            setIsLoading(false)
            setLoadedPlanets(data)
        })
    }, [pageCount])


    if (isLoading) {
        return (
            <section>
                <p>loading...</p>
            </section>
        )
    }

    return (
        <div className={classes.List}>
            <h1>Page: {pageCount}</h1>
            {loadedPlanets.result.map(planet =>
                <DisplayPlanet planet={planet}/>
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
        if(Number(pageCount) * 10 < loadedPlanets.count)
            setPageCount(Number(pageCount) + 1);
    }
}

export default AllPlanetsPage;
