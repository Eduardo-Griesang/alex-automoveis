"use client"
import { useEffect, useState } from "react"
import json from "../../cars.json"
import Menu from "./Menu"

export default function Car({ params }) {
    const [car, setcar] = useState()

    useEffect(() => {
        setcar(json.filter((car) => car.id == params.carid))
        console.log(params.carid)
    },[])
    
    return(
        <main>
            <Menu />
        </main>
    )
}