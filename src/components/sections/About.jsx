import Title from "../common/Title";
import ProfileCard from "../common/ProfileCard";
import Button from "../common/Button";

function About() {
    return(
        <section className="p-8 px-10 md:px-20">
            <Title texto="sobre-mim" id="02" />
            <nav className="md:flex md:gap-8">
                <ProfileCard></ProfileCard>

                <div className="w-full text-gray-400">
                    <div className="text-bold text-gray-400">
                        $ cat sobre.<span className="text-cyan-400">txt</span>
                    </div>

                    <h3 className="text-2xl text-white font-bold mt-4 mb-4">
                        Não escrevo apenas código, 
                        <span className="text-green-400"> construo sistemas </span> 
                        em que outras pessoas podem confiar.
                    </h3>

                    <p>
                        Sou desenvolvedor full-stack há 1 ano, com foco em 
                        <span className="text-cyan-400"> arquitetura de backend </span>, 
                        segurança e sistemas distribuídos. Comecei fazendo scripts de automação 
                        e hoje projeto infraestruturas que processam milhões de requisições sem cair.
                    </p>

                    <br />

                    <p>
                        Acredito em código simples, testável e documentado. Fora do trabalho, 
                        contribuo com projetos open source e escrevo sobre boas práticas de engenharia.
                    </p>

                    <div className="mt-8">
                        <div className="tool-tags">
                            <Button border="solid 2px #05df72" texto="HTML" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="CSS" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="JS" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="PHP" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="React.JS" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="Laravel" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="Docker" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="Git & GitHub" color="#05df72" />   
                            <Button border="solid 2px #05df72" texto="Redes de Computadores" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="Adobe XD" color="#05df72" />
                            <Button border="solid 2px #05df72" texto="Photoshop" color="#05df72" />
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default About;