import { useState } from "react";
import { navLinksData } from "../../data/navLinksData";

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav>
            <nav className="flex justify-between items-center">
                {/** Logo */}
                <div>
                    <h1 className="font-bold text-white"> 
                        &lt;/ <span className="text-green-400">mamemo</span>.<span className="text-cyan-400">dev</span> &gt;
                    </h1>
                </div>

                {/** Menu mobile */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                    <span className="text-green-400 font-bold bg-green">Menu</span>
                </button>

                {/** Menu desktop */}
                <ul className="hidden md:flex">
                    { navLinksData.map((item) => (
                        <li key={ item.id } className="text-green-400 font-bold mr-8">
                            <a href={ item.href }>
                                { item.label }
                            </a>
                        </li>
                    )) }
                </ul>
            </nav>

            {/** Menu mobile dropdown */}
            <div className={` ${isMenuOpen ? "block h-screen md:hidden" : "hidden"} border-t border-green-400 mt-4`}>
                <ul className="text-center mt-4">
                    { navLinksData.map((item) => (
                        <li key={ item.id } onClick={() => setIsMenuOpen(!isMenuOpen)} className="py-2 px-8 mt-2 flex w-full hover:bg-white">
                            <div>
                                <p className="text-green-400 font-bold h-5 pt-4">
                                    { item.id }
                                    <span className="text-cyan-800 font-bold">-&gt;</span>
                                </p> 
                            </div>
                            <div className="ml-4 text-left">
                                <a className="text-green-400 font-bold text-2xl" href={ item.href }>{ item.label }</a>
                                <p className="text-gray-400 text-sm">{ item.description }</p>
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;