
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
    return (
        <div className="mt-10">
            <h1>Our Team </h1>
            <h5>Meet Awesome People</h5>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/C5JSwRG/team-1.jpg" alt="name" className="rounded-full" />
                    
                    </figure>
                    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">Willam Doe</h2>
                        <p>CEO / FOUNDER</p>
                        <div className="flex gap-3 justify-center">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram></BsInstagram>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Team;