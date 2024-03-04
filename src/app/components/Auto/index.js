"use client"
import Image from "next/image";
import Link from "next/link";
import Items from "./Items";
import Coment from "./Coment";

export default function Auto({param}) {
    const car = param[0]
    return(
        <section className="bg-gray-100 flex flex-col lg:py-16 lg:gap-7 lg:px-16 xl:px-24 2xl:px-32 gap-5 py-7 px-2 ">
            <section className="flex gap-2 ">
                <Link href={"/"}>Início</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">Carros</span>
            </section>

            <section className="flex flex-col gap-3 text-center items-start lg:flex-row lg:justify-between">
                <h2 className="font-semibold text-xl">{car.nome}</h2>
                <h2 className="font-semibold text-xl">{car.preco}</h2>
            </section>

            <section className="grid grid-cols-1 gap-5 lg:grid-cols-6">
                <section className="col-span-4">
                    <Image
                        src={car.img}
                        width={350}
                        height={350}
                        alt={car.nome}
                        className="rounded-md w-full"
                    />
                    <Items itens={car.adicionais} />
                    <Coment coment={car.comentario} />
                </section>

                <section className="col-span-2">
                    <div className="bg-white p-5 rounded-md">
                        <h2 className="font-bold text-xl lg:text-3xl pb-2 lg:pb-5 xl:pb-7">Se interessou pelo veículo?</h2>
                        <span className="text-gray-700">Nos ligue ou envie uma mensagem!</span>
                        <div className="mt-3">
                            <a href="https://api.whatsapp.com/send?phone=5551995747081&text=" className="text-white  bg-emerald-500 text-lg py-2 px-5 rounded-md">Whatsapp</a>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}