import Car from "./Car";
import compacto from "../../images/compacto.webp"
import sedan from "../../images/sedan.webp"
import suv from "../../images/suv.webp"
import conversivel from "../../images/conversivel.webp"
import coupe from "../../images/coupe.webp"


export default function Types () {
    return(
        <section className="bg-gray-100 flex flex-col py-7 lg:py-16 px-2 lg:gap-6 lg:px-10 gap-5 text-center">
            <h2 className="font-semibold md:text-lg">Trabalhamos com diversos tipos de veículos</h2>

            <section className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-center gap-5">
                <Car logo={compacto} type="Compacto" />
                <Car logo={sedan} type="Sedan" />
                <Car logo={suv} type="SUV" />
                <Car logo={conversivel} type="Conversível" />
                <Car logo={coupe} type="Coupe" />
            </section>
        </section>
    )
}