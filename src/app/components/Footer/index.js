import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return(
        <footer className="flex flex-col gap-6 lg:items-center bg-red-950 p-6 sm:p-10 text-white" id="contato">
            <section className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:xl:w-4/5">
                <section className="flex flex-col gap-3 lg:gap-5">
                    <h4 className="text-xl font-semibold">Contato</h4>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>R. Venâncio Aires, 3333 - Niterói, Canoas - RS, 92110-001</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <a href="https://api.whatsapp.com/send?phone=5551995747081&text=">(51) 99574-7081</a>
                    </div>
                </section>

                <section>
                    
                </section>

                <section className="flex flex-col gap-3 lg:gap-5 lg:items-end">
                    <h4 className="text-xl font-semibold">Horário</h4>
                    <div>
                        <span>Seg - Sex : 09:00 - 18:00</span>
                    </div>
                    <div>
                        <span>Sab : 09:00 - 12:00</span>
                    </div>
                </section>
            </section>

            <section className="flex gap-1 items-center lg:justify-center lg:pt-16">
                <FontAwesomeIcon icon={faCopyright} size="sm" />
                <span className="text-sm">2024 Alex Automoveis - Todos os direitos reservados</span>
            </section>
        </footer>
    )
}