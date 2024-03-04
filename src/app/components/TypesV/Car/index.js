"use client"
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Car ({logo, type}) {

    const TypeRef = useRef(null)
    const inView = useInView(TypeRef, {once:true})
    const typeAnimate = useAnimation()

    useEffect(() => {
        if(inView){
        typeAnimate.start("visible")
        }
    }, [inView])

    return (
        <div ref={TypeRef}>
            <motion.section className="flex flex-col gap-10 items-center bg-white rounded-lg h-48 justify-center lg:px-4 hover:shadow-xl"
                variants={{
                    hidden: {y: 100, opacity:0.3},
                    visible: {y: 0, opacity:1}
                  }}
                  initial="hidden"
                  transition={{duration: 1}}
                  animate={typeAnimate}
            >
                <Image 
                    src={logo}
                    width={170}
                    height={170}
                    alt={type}
                    className="object-fill"
                />
                <span>{type}</span>
            </motion.section>
        </div>
    )
}