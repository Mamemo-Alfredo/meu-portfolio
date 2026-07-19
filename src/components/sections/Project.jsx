import Title from "../common/Title";
import ProjectCard from "../common/ProjectCard";
import { projectsData } from "../../data/projectsData";

function Project() {
    return(
        <section className="p-8 px-10 md:px-20" id="project">
            <Title id="03" texto="meus-projectos" />

            <nav>
                <ul>
                    { projectsData.map((item) => (
                        <li key={ item.id }>
                            <ProjectCard 
                                titulo={ item.titulo }
                                nome={ item.nome }
                                descricao={ item.descricao }
                                link={ item.link }
                                github={ item.github }
                                stacks={ item.stacks }
                                ano={ item.ano }
                            />
                        </li> 
                    )) }
                </ul>
            </nav>
        </section>
    );
}

export default Project;