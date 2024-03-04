import Image from "next/image";
import logo from "../../images/logo.png"
import Link from "next/link";

export default function Menu() {
    return(
        <header>
            <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 w-screen">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href={'/'} className="flex items-center">
                        <Image 
                            src={logo}
                            width={190}
                            height={190}
                            alt="Logo Alex Automóveis"
                            className="w-36 sm:w-40"
                        />
                    </Link>
                </div>
            </nav>
        </header>
    )
}