
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
    return (
        <div className="mt-10">
            <h1>Our Team </h1>
            <h5>Meet Awesome People</h5>

        <div className="grid grid-cols-3 justify-between">

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

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/kh2jqfG/team-3.jpg" alt="name" className="rounded-full" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">John Cena</h2>
                        <p>DESIGNER</p>
                        <div className="flex gap-3 justify-center">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram></BsInstagram>
                    </div>
                    </div>                 
                </div>               
            </div>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/T43hpQN/team-2.jpg" alt="name" className="rounded-full" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">Jack Black</h2>
                        <p>MANAGER</p>
                        <div className="flex gap-3 justify-center">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram></BsInstagram>
                    </div>
                    </div>                 
                </div>               
            </div>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/gRpH13w/team-4.jpg" alt="name" className="rounded-full" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">Emma Doe</h2>
                        <p>CHEF</p>
                        <div className="flex gap-3 justify-center">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram></BsInstagram>
                    </div>
                    </div>                 
                </div>               
            </div>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/Jk1mMnQ/team-5.jpg" alt="name" className="rounded-full" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">Jane Watson</h2>
                        <p>STAFF</p>
                        <div className="flex gap-3 justify-center">
                        <BsFacebook></BsFacebook>
                        <BsTwitter></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram></BsInstagram>
                    </div>
                    </div>                 
                </div>               
            </div>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className="px-10 pt-10 ">
                        <img  src="https://i.ibb.co/jRQ3rwr/team-6.jpg" alt="name" className="rounded-full" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-1">Katt Parry</h2>
                        <p>STAFF</p>
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



        </div>
    );
};

export default Team;