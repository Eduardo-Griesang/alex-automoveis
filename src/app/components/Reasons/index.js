import Card from "./Card";

export default function Reasons() {
    return(
        <section className="flex flex-col py-7 lg:py-16 px-2 lg:gap-10 lg:px-10 gap-7 text-center items-center bg-gray-100" id="sobre">
            <h3 className="font-bold text-xl lg:text-3xl pb-2">Porque escolher a Alex Automoveis</h3>

            <section className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:gap-10 xl:gap-12 lg:grid-cols-3 xl:w-4/5">
                <Card img="faTags" color="#c8666c" title="Melhor Preço" description="Além de Oferecemos os veículos com os melhores preços da região nós te ajudamos com um potimo financiamento" />
                <Card img="faCarRear" color="#81c6d6" title="Confiabilidade" description="Oferecemos seguro para novas compras além de dar a certeza que seu carro estará em perfeito estado" />
                <Card img="faShieldHalved" color="#77cb87" title="Diversar opções" description="Trabalhamos com as mais diversas marcas, então com certeza teremos o veículo perfeito para você" />
            </section>
        </section>
    )
}