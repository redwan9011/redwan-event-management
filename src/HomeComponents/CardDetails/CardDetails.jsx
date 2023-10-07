
import { useEffect, useState } from "react";
import { useLoaderData, useParams,  } from "react-router-dom";
import CardDetail from "./CardDetail";



const CardDetails = () => {
    const [cards, setCards] = useState()
    const services = useLoaderData()
    const {id} = useParams()

    useEffect( () => {
        const service = services.find(card =>card.id == id);
        
        setCards(service)
    }, [id, services])

 
    return (
        <div>
           <CardDetail card={cards}></CardDetail>
        </div>
    );
};

export default CardDetails;