"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faCarRear, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Card({title, description, img, color}) {
    const[Icon, setIcon] = useState()
    useEffect(() =>{
        if ( img === "faTags" ){
            setIcon(faTags)
        } else if(img === "faCarRear"){
            setIcon(faCarRear)
        } else {
            setIcon(faShieldHalved)
        }
    },[])
    
    return (
        <section className="flex flex-col gap-4 py-10 rounded-md hover:bg-white">
            <FontAwesomeIcon icon={Icon} style={{color: color,}} className="text-7xl" />

            <section className="flex flex-col gap-2 max-w-80 lg:max-w-full">
                <h4 className="font-bold text-lg">{title}</h4>
                <p className="text-gray-700 text-sm">{description}</p>
            </section>
        </section>
    )
}