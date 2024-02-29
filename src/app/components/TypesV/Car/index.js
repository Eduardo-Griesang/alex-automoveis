import Image from "next/image";

export default function Car ({logo, type}) {
    return (
        <section className="flex flex-col gap-10 items-center bg-white rounded-lg h-48 justify-center lg:px-4">
            <Image 
                src={logo}
                width={170}
                height={170}
                alt={type}
                className="object-fill"
            />
            <span>{type}</span>
        </section>
    )
}