import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faGasPump } from "@fortawesome/free-solid-svg-icons";
import gearbox from "./gearbox.png"
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CarSec ({specs}){

    const CarRef = useRef(null)
    const inView = useInView(CarRef, {once:true})
    const carAnimate = useAnimation()

    useEffect(() => {
        if(inView){
        carAnimate.start("visible")
        }
    }, [inView])

    return (
        <section ref={CarRef}>
            <motion.section className="border-2 flex flex-col justify-center items-start rounded-md p-3 xl:max-w-80"
                variants={{
                    hidden: {y: 100, opacity:0.3},
                    visible: {y: 0, opacity:1}
                  }}
                  initial="hidden"
                  transition={{duration: 1}}
                  animate={carAnimate}
            >
                <Image 
                    src={specs.img} 
                    width={250}
                    height={250}
                    alt={specs.nome}
                    className="rounded-md w-full"
                />

                <div className="flex flex-col items-start py-3 gap-1">
                    <p className="font-semibold text-xs">{specs.ano}</p>
                    <span className="font-semibold text-xs">{specs.preco}</span>
                    <h3 className="font-semibold text-sm">{specs.nome}</h3>
                </div>

                <div className="h-[1px] w-full bg-gray-300"></div>

                <div className="flex gap-3 py-3 justify-center text-xs text-gray-600">
                    <div className="flex gap-1 items-center capitalize">
                        <FontAwesomeIcon icon={faRoad} />
                        <span>{specs.km}km</span>
                    </div>

                    <div className="flex gap-1 items-center capitalize">
                        <FontAwesomeIcon icon={faGasPump} />
                        <span>{specs.gasolina}</span>
                    </div>

                    <div className="flex gap-1 items-center capitalize">
                        <Image 
                            src={gearbox} 
                            width={16}
                            height={16}
                            alt="gearbox"
                            className=""
                         />
                        <span>{specs.cambio}</span>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full bg-red-600 hover:bg-red-700 rounded-md">
                    <Link href={`/car/${specs.id}`} passHref className="text-lg text-white hover:cursor-pointer w-full">
                        Confira
                    </Link>
                </div>
            </motion.section>
        </section>
    )
}