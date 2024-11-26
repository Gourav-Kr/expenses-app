import Link from "next/link"
import imageSrc from "../public/logo.png"
import Image from "next/image"

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font bg-violet-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={imageSrc} alt="logo" placeholder="blur" style={ { width:"32px" } }/>
                    <span className="ml-3 text-xl">MoneyMap</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900" >Home</Link>
                    <Link href="/addUser" className="mr-5 hover:text-gray-900" >Add User</Link>
                    {/* <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                </nav>
                <button className="text-white inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-base mt-4 md:mt-0">Noop
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}