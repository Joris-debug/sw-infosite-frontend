
function addToFavorites(){
    let object = window.localStorage.getItem('swFavorites');
    if(!isJsonString(object) || JSON.parse(object) === null){
        object={
            movieArray: [],
            vehicleArray: [],
            characterArray: [],
            planetArray: [],
        }
        window.localStorage.setItem('swFavorites', JSON.stringify(object));
    }
    else
    object = JSON.parse(object)
    
    console.log(object)
    if(arguments[0].character)
    {
       if(!object.characterArray.includes({id: arguments[0].character.id}))
        object.characterArray.push({id: arguments[0].character.id})
    }
    else if(arguments[0].planet)
    {
       if(!object.planetArray.includes({id: arguments[0].planet.id}))
        object.planetArray.push({id: arguments[0].planet.id})
    }
    else if(arguments[0].vehicle)
    {
       if(!object.planetArray.includes({id: arguments[0].vehicle.id, isShip: arguments[0].isShip}))
        object.planetArray.push({id: arguments[0].vehicle.id, isShip: arguments[0].isShip})
    }
    else if(arguments[0].movie)
    {
       if(!object.planetArray.includes({id: arguments[0].movie.episode_id}))
        object.movieArray.push({id: arguments[0].movie.episode_id})
    }
    
    window.localStorage.setItem('swFavorites', JSON.stringify(object));

   

}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function getFavoritesObject(){

    let object = window.localStorage.getItem('swFavorites');
    if(!isJsonString(object) || JSON.parse(object) === null){
        object={
            movieArray: [],
            vehicleArray: [],
            characterArray: [],
            planetArray: [],
        }
        window.localStorage.setItem('swFavorites', JSON.stringify(object));
    }
    else
    object = JSON.parse(object)

    return object;
}


export {addToFavorites, getFavoritesObject};