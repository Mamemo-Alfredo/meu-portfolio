import HeaderCard from "./HeaderCard";
import Button from "./Button";

function ProjectCard({ titulo, nome, descricao, github, stacks, ano }) {
    return(
        <div className="w-full border border-green-400 mb-4">
            <HeaderCard header={ titulo } />

            <div className="border-t border-green-400 text-white p-2">
                <span className="text-green-400 font-bold text-2xl">{ nome }</span> <br /> <br />
                <span className="text-gray-400">{ descricao }</span> 
                
                <br />

                <span className="text-gray-400"><span className="font-bold">Ano: </span> { ano }</span> <br />

                <br />

                <span className="text-gray-400">
                    <ul className="flex">
                        { 
                            stacks.map((stack, index) => (
                                <li key={ index }>
                                    <Button texto={ stack } color="#00d3f2" border="solid 2px #00d3f2" />
                                </li>
                            )) 
                        }
                    </ul>
                </span>

                <br />

                <a href={ github } target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">ver o código no GitHub.</a>
            </div>
        </div>
    );
}

export default ProjectCard;