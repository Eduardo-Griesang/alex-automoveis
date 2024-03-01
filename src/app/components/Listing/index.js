"use client"
import { useState } from "react"
import json from "../../cars.json"
import CarSec from "./Car"

export default function Listing () {
    const [filter, setFilter] = useState(9)

    function changeFilter(){
        setFilter(filter + 8)
    }

    const list = json.filter((car) => car.id < filter)

    return (
        <section className="flex flex-col py-7 lg:py-16 px-2 lg:gap-6 lg:px-10 gap-5 text-center items-center">
            <h2 className="font-bold text-xl lg:text-3xl pb-2 lg:pb-5 xl:pb-7">Confira Nosso Estoque</h2>

            <section className="grid gap-3 lg:gap-6 grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 xl:w-4/5">
                {list.map((car) => {
                    return (
                        <CarSec specs={car} key={car.nome} />
                    )
                })}
            </section>

            <span className="bg-red-600 hover:bg-red-700 rounded-md px-8 py-1 text-white text-lg cursor-pointer mt-3 lg:mt-5" onClick={changeFilter}>
                Ver mais +
            </span>
        </section>
    )
}