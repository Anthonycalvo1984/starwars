import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [vehicles, setVehicles] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/vehicles/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setVehicles(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        Soy {vehicles.name ? vehicles.name : ""} con el uid {params.uid} y mi género es {vehicles?.gender}
    </>)
}

export default SingleVehicles