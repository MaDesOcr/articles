import { useEffect } from "react";
import getAllData from "../data/InteractApi";

function ListCard(){

    useEffect(()=> getAllData());

    return(
        <div></div>
    )
}

export default ListCard;
