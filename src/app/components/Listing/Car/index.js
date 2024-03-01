import Image from "next/image";
import Link from "next/link";

export default function CarSec ({specs}){
    return (
        <section className="border-2 flex flex-col justify-center items-start rounded-md p-3 xl:max-w-80">
            <Image 
                src={specs.img} 
                width={250}
                height={250}
                alt={specs.nome}
                className="rounded-md w-full"
            />

            <div className="flex flex-col items-start py-3 gap-1">
                <p className="font-semibold">{specs.ano}</p>
                <span className="font-semibold">{specs.preco}</span>
                <h3 className="font-semibold text-sm">{specs.nome}</h3>
            </div>

            <div className="flex justify-center items-center w-full bg-red-600 hover:bg-red-700 rounded-md">
                <Link href="/" className="text-lg text-white hover:cursor-pointer w-full">Confira</Link>
            </div>
        </section>
    )
}