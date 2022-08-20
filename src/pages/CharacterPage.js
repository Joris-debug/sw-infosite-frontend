import {useState, useEffect} from "react";
import DisplayCharacter from "../layout/user interface/DisplayCharacter";

function CharacterPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCharacter, setLoadedCharacter] = useState({});
    useEffect(() => {
        const character_id = (window.location.href.split('/'))[4];
        console.log(character_id)
        fetch(`http://localhost:3001/character/${character_id}`
        ).then(response => {
            return response.json();
        }).then(data => {
            const characterObject = {
                ...data
            }
            setLoadedCharacter(characterObject);
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
            <DisplayCharacter character={loadedCharacter}/>
        </div>
    )
}

export default CharacterPage;
