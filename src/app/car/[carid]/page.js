import Header from "@/app/components/Header"

export default function Car({ params }) {
    console.log(params.carid)
    return(
        <section>
            <h1>id = {params.carid}</h1>
        </section>
    )
}