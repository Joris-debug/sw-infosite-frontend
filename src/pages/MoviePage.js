import {useState, useEffect} from "react";
import DisplayMovie from "../layout/user interface/DisplayMovie";

function MoviePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMovie, setLoadedMovie] = useState({});
    useEffect(() => {

        const movie_id = (window.location.href.split('/'))[4];
        fetch(`http://localhost:3001/movie/${movie_id}`
        ).then(response => {
            return response.json();
        }).then(data => {
            const movieObject = {
                ...data
            }
            setLoadedMovie(movieObject);
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
            <DisplayMovie movie={loadedMovie}/>
        </div>
    )
}

export default MoviePage;
