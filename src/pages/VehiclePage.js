import {useState, useEffect} from "react";
import DisplayVehicle from "../layout/user interface/DisplayVehicle";

function VehiclePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVehicle, setLoadedVehicle] = useState({});
    useEffect(() => {


        const category = (window.location.href.split('/'))[4];
        const vehicle_id = (window.location.href.split('/'))[5];
        fetch(`http://localhost:3001/transport/${category}/${vehicle_id}`
        ).then(response => {
            return response.json();
        }).then(data => {
            const vehicleObject = {
                ...data
            }
            setLoadedVehicle(vehicleObject);
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
            <DisplayVehicle vehicle={loadedVehicle}/>
        </div>
    )
}

export default VehiclePage;
