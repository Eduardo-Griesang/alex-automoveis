"use client"
import Image from "next/image";
import logo from "../../images/logo.png"
import background from "../../images/background.jpg"
import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function Header () {

    const [mobileMenu, setMobileMenu] = useState("hidden")
    const headerRef = useRef(null)
    const inView = useInView(headerRef, {once:true})
    const headerAnimate = useAnimation()

    useEffect(() => {
        if(inView){
        headerAnimate.start("visible")
        }
    }, [inView])

    function handleMenu(){
        if ( mobileMenu === "hidden" ){
            setMobileMenu("")
        } else {
            setMobileMenu("hidden")
        }
    }

    return (
        <header className="relative scroll-smooth" ref={headerRef}>
            <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 lg:absolute lg:top-3 w-screen">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <Image 
                            src={logo}
                            width={190}
                            height={190}
                            alt="Logo Alex Automóveis"
                            className="w-36 sm:w-40"
                        />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false" onClick={handleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${mobileMenu} justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-400 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:text-white dark:border-gray-400 rounded-sm">Início</a>
                            </li>
                            <li>
                                <a href="#estoque" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-400 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:text-white dark:border-gray-400 rounded-sm">Estoque</a>
                            </li>
                            <li>
                                <a href="#sobre" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-400 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:text-white dark:border-gray-400 rounded-sm">Sobre nós</a>
                            </li>
                            <li>
                                <a href="#contato" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-black lg:dark:hover:text-white dark:hover:bg-gray-400 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:text-white dark:border-gray-400 rounded-sm">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="text-white">
                <Image 
                    src={background}
                    width={1920}
                    height={1080}
                    alt="Logo Alex Automóveis"
                    className="min-h-72 object-cover"
                />
                <motion.div className="absolute top-1/2 w-full flex flex-col justify-center text-center gap-1 sm:gap-3"
                    variants={{
                        hidden: {y: 100, opacity:0},
                        visible: {y: 0, opacity:1}
                      }}
                      initial="hidden"
                      transition={{duration: 0.5}}
                      animate={headerAnimate}
                >
                    <h1 className="text-3xl sm:text-5xl font-bold">Encontre seu Próximo Veículo</h1>
                    <span className="text-sm sm:text-lg">Na melhor revenda da região</span>
                </motion.div>
            </section>
        </header>
    )
}