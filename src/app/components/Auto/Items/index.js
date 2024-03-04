
export default function Items({itens}) {
    return(
        <section className="flex flex-col py-7 lg:py-16 lg:gap-10 gap-7">
            <h3 className="font-bold text-xl lg:text-3xl pb-2">Itens do veículo</h3>

            <section className="bg-white p-3 rounded-md flex flex-wrap gap-2">
                {itens.map((item) => {
                    return(
                        <div key={item} className="bg-gray-100 p-1 rounded-md">
                            {item}
                        </div>
                    )
                })}
            </section>
        </section>
    )
}