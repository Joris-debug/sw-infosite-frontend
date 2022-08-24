
function addToFavorites(){
    let object = getFavoritesObject();
    
    console.log(object)
    if(arguments[0].character)
    {
       if(!isAlreadyFavorite({id: arguments[0].character.id}, "character"))
        object.characterArray.push({id: arguments[0].character.id})
    }
    else if(arguments[0].planet)
    {
       if(!isAlreadyFavorite({id: arguments[0].planet.id}, "planet"))
        object.planetArray.push({id: arguments[0].planet.id})
    }
    else if(arguments[0].vehicle)
    {
       if(!isAlreadyFavorite({id: arguments[0].vehicle.id, isShip: arguments[0].vehicle.isShip}, "vehicle"))
        object.vehicleArray.push({id: arguments[0].vehicle.id, isShip: arguments[0].vehicle.isShip})
    }
    else if(arguments[0].movie)
    {
       if(!isAlreadyFavorite({id: arguments[0].movie.id}, "movie"))
        object.movieArray.push({id: arguments[0].movie.id})
    }
    
    window.localStorage.setItem('swFavorites', JSON.stringify(object));

   

}

function isAlreadyFavorite(item, type){

    let object = getFavoritesObject();
    switch(type)
    {
        case "movie":
            return object.movieArray.some(data => data.id === item.id)

            case "character":
                return object.characterArray.some(data => data.id === item.id)

            case "planet":
                return object.planetArray.some(data => data.id === item.id)
            
            case "vehicle":
                return object.vehicleArray.some(data => data.id === item.id && data.isShip === item.isShip)

        default:
            return true;
    }

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
    //window.localStorage.clear();
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