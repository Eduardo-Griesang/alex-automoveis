"use client"
import { useEffect, useState } from "react"
import json from "../../cars.json"
import Menu from "../../components/Menu"
import Auto from "../../components/Auto"
import Footer from "@/app/components/Footer"

export default function Car({ params }) {
    const [car, setcar] = useState()

    useEffect(() => {
        setcar(json.filter((car) => car.id == params.carid))
    },[])
    console.log(car)
    
    return(
        <main className="overflow-hidden">
            <Menu />
            {car && <Auto param={car} />}
            <Footer />
        </main>
    )
}