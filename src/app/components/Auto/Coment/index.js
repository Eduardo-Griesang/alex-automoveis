
export default function Coment({coment}) {
    return(
        <section className="flex flex-col pb-7 lg:pb-16 lg:gap-10 gap-7">
            <h3 className="font-bold text-xl lg:text-3xl pb-2">Comentário</h3>

            <section className="bg-white p-3 rounded-md flex flex-wrap gap-2">
                {coment}
            </section>
        </section>
    )
}