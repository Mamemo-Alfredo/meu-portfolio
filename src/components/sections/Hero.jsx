import Button from "../common/Button";
import { staticsData } from "../../data/staticsData";

function Hero() {
    return(
        <section className="p-8 px-10 md:px-20">
            {/** Elementos em destaques. */}
            <div className="mt-6">
                <p className="text-gray-400 font-bold md:mt-8 md:2xl">$ Olá, eu sou o <span className="text-cyan-400">--Eliandro.</span></p>
                <p className="text-white font-bold mt-4 text-3xl md:text-4xl md:mt-10">Construindo software que <span className="text-green-400">executa</span> com precisão e <span className="text-cyan-400">segurança</span>!</p>
                <p className="text-gray-400 mt-4 md:text-2xl md:mt-8">
                    Desenvolvedor fullstack focado performance, segurança e <br /> sistemas distribuidos.
                    Transformo ideias complexas em codigo <br /> limpo e escalavel.
                </p>

                <div className="mt-10 md:mt-24 md:mb-10">
                    <Button texto="Ver projecto" cor_fundo="#05df72" border="solid #05df72 3px" margin="4px 10px 2px 0px" width="139px"/>
                    <Button texto="Baixar CV.pdf" color="#00d3f2" border="solid #00d3f2 3px"/>
                </div>
            </div>

            {/** Estatistica */}
            <div className="mt-10  border-t border-green-400">
                <ul className="flex">
                    { staticsData.map((item) => (
                        <li key={ item.id } className="mr-6" >
                            <span className="text-green-400 font-bold text-4xl"> { item.static } </span> <br />
                            <span className="text-green-400 text-xl"> { item.label } </span>
                        </li>
                    )) }
                </ul>
            </div>
        </section>
    );
}

export default Hero;