import "./aboutUs.css"

export default function AboutUs() {
    return(
        <section className="flex justify-center items-center bg-fixed bg-paralax bg-cover p-5 sm:p-7 md:min-h-96 text-white min-h-64">
            <div className="flex flex-col items-start gap-3 justify-center xl:w-4/5">
                <h3 className="text-2xl font-bold pt-5 pb-2 md:text-3xl">Um pouco sobre nós</h3>
                <p className="text-sm lg:w-2/3">Apresentamos uma ampla seleção de veículos seminovos e usados, garantindo procedência e qualidade. Com proprietários experientes no ramo, nossa missão é superar as expectativas dos clientes, realizando o sonho de cada pessoa em encontrar o carro desejado.</p>
                <p className="text-sm lg:w-2/3">Priorizamos oferecer as melhores taxas de mercado e agilidade na aprovação de crédito para garantir a satisfação dos compradores. Nossa equipe qualificada está pronta para atender de forma diferenciada, focando nas necessidades individuais de cada cliente.</p>
                
                <section className="flex flex-col gap-3 lg:flex-row lg:gap-12 lg:xl:w-4/5">
                    <div className="flex flex-col items-start">
                        <h3 className="text-red-600 text-lg font-semibold">+5</h3>
                        <span>Anos no mercado</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-red-600 text-lg font-semibold">+200</h3>
                        <span>Carros vendidos</span>
                    </div>
                </section>
            </div>
        </section>
    )
}