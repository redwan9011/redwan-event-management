
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Team = () => {
    return (
        <div className="mt-10">
            <h1 className="text-center text-5xl font-mono font-bold ">Our Team </h1>
            <h5 className="text-center text-slate-500 mt-3 mb-10">Meet Awesome People</h5>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10">

        <div >
                <div className="card  bg-base-100 ">
                    <figure className=" ">
                        <img src="https://i.ibb.co/C5JSwRG/team-1.jpg" alt="name" className="rounded-full md:w-52" />
                    
                    </figure>
                    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">Willam Doe</h2>
                        <p className="text-orange-500 font-semibold text-sm">CEO / FOUNDER</p>
                        <div className="flex gap-5 justify-center text-red-600 ">
                        <BsFacebook ></BsFacebook>
                        <BsTwitter ></BsTwitter>
                        <BsLinkedin></BsLinkedin>
                        <BsInstagram ></BsInstagram>
                    </div>
                    </div>                 
                </div>               
            </div>

            <div >
                <div className="card  bg-base-100 ">
                    <figure className=" ">
                        <img  src="https://i.ibb.co/kh2jqfG/team-3.jpg" alt="name" className="rounded-full md:w-52" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">John Cena</h2>
                        <p>DESIGNER</p>
                        <div className="flex gap-3 justify-center text-red-600 ">
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
                    <figure className=" ">
                        <img  src="https://i.ibb.co/T43hpQN/team-2.jpg" alt="name" className="rounded-full md:w-52" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">Jack Black</h2>
                        <p>MANAGER</p>
                        <div className="flex gap-3 justify-center text-red-600 ">
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
                    <figure className="">
                        <img  src="https://i.ibb.co/gRpH13w/team-4.jpg" alt="name" className="rounded-full md:w-52" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">Emma Doe</h2>
                        <p>CHEF</p>
                        <div className="flex gap-3 justify-center text-red-600">
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
                    <figure className="">
                        <img  src="https://i.ibb.co/Jk1mMnQ/team-5.jpg" alt="name" className="rounded-full md:w-52" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">Jane Watson</h2>
                        <p>STAFF</p>
                        <div className="flex gap-3 justify-center text-red-600">
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
                    <figure className=" ">
                        <img  src="https://i.ibb.co/jRQ3rwr/team-6.jpg" alt="name" className="rounded-full md:w-52" />                   
                    </figure>    
                    <div className="text-center space-y-1">
                        <h2 className="mt-3 font-bold text-xl">Katt Parry</h2>
                        <p >STAFF</p>
                        <div className="flex gap-3 justify-center text-red-600">
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