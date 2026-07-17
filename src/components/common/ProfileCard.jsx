import HeaderCard from "./HeaderCard";
import ProfileDescription from "./ProfileDescription";

function ProfileCard() {
    return(
        <div className="w-full border border-green-400">
            <HeaderCard header="foto de perfil" />

            <div 
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoxlNVr_hjXrE1M8o3DUd5jGn3g6-hwPzZRMvueQiaQ&s=10')" }}
                className="w-full h-70 bg-cover bg-center bg-no-repeat border-t border-green-400"
            ></div>

            <div className="border-t border-green-400 text-white p-2">
                <span className="text-green-400 font-bold">Eliandro Alfredo</span> <br />
                <span className="text-gray-400">Tecnico de TI | Full-Stack | Web-Design</span>

                <ProfileDescription description="Localização" value="Luanda-Angola" />
                <ProfileDescription description="Experiência" value="2 anos" />
                <ProfileDescription description="Foco" value="Desenvolvimento Web" />
            </div>
        </div>
    );
}

export default ProfileCard;