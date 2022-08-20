import {useState, useEffect} from "react";
import DisplayCharacter from "../layout/user interface/DisplayCharacter";
import classes from "./ElementList.module.css"

function AllCharactersPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCharacters, setLoadedCharacters] = useState({});
    const [pageCount, setPageCount] = useState(((window.location.href.split('/'))[4]));

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3001/characterList/${pageCount}`
        ).then(response => {
            return response.json();
        }).then(data => {

            setIsLoading(false)
            setLoadedCharacters(data)
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
            {loadedCharacters.result.map(character =>
            <DisplayCharacter character={character}/>
            )}
            <div className={classes.buttonContainer}>
                <button onClick={previousPageHandler}>previous page</button>
                <button onClick={nextPageHandler}>next page</button>
            </div>
        </div>
    )

    function previousPageHandler(){
        if(Number(pageCount) > 1)
        setPageCount(Number(pageCount) - 1);
    }
    function nextPageHandler(){
        if(Number(pageCount) * 10 < loadedCharacters.count)
        setPageCount(Number(pageCount) + 1);
    }

}

export default AllCharactersPage;
