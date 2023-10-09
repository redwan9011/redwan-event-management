

const Menus = () => {
    return (
        <div className="my-16">
           
            <p className="text-slate-500 md:px-20 lg:px-72 text-center mt-3 mb-8">We offer a variety of delicious, seasonal menus that are rooted in West Coast flavours, with an emphasis on fresh, local, sustainable ingredients. </p>

            <h1 className="text-center font-mono text-5xl font-bold mb-8">Our Top <span className="text-red-500">Menus</span></h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">


                <div className="overflow-hidden">
                    <div className=" relative hover:scale-110 duration-150 ">

                        <img className="" src="https://i.ibb.co/smzvtBv/menu-1.jpg" alt="" />

                        <p className="hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-5  w-full h-full absolute top-0 left-0  text-white font-semibold md:text-2xl flex justify-center items-center duration-150"> BUFFET / FAMILY</p>
                    </div>
                </div>


                <div className="overflow-hidden">

                    <div className="relative hover:scale-110 duration-150">
                        <img src="https://i.ibb.co/zX1Q2hX/menu-2.jpg" alt="" />
                        <p className="text-white font-semibold md:text-2xl   absolute top-0 left-0  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-10 duration-150">Office Catering </p>
                    </div>
                </div>


               <div className="overflow-hidden">
               <div className="relative hover:scale-110 duration-150">
                    <img src="https://i.ibb.co/Ny81wRc/menu-3.jpg" alt="" />
                    <p className="text-white font-semibold md:text-2xl   absolute top-0 left-0  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-10 duration-150">MEAT </p>
                </div>
               </div>


               <div className="overflow-hidden">
               <div className="relative hover:scale-110 duration-150">
                    <img src="https://i.ibb.co/M8PmzWF/menu-4.jpg" alt="" />
                    <p className="text-white font-semibold md:text-2xl  absolute top-0 left-0  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-10 duration-150">Plated</p>
                </div>
               </div>


               <div className="overflow-hidden">
               <div  className="relative hover:scale-110 duration-150">
                    <img src="https://i.ibb.co/FJc8Tbx/menu-5.jpg" alt="" />
                    <p className="text-white font-semibold md:text-2xl   absolute top-0 left-0  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-10 duration-150">BBQ</p>
                </div>
               </div>

            <div  className="overflow-hidden">
                
                <div className="relative hover:scale-110 duration-150">
                    <img src="https://i.ibb.co/s9sR8C0/menu-6.jpg" alt="" />
                    <p className="text-white font-semibold md:text-2xl  absolute top-0 left-0  w-full h-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 bg-black bg-opacity-10 duration-150">Sushi</p>
                </div>
            </div>    


            </div>
        </div>
    );
};

export default Menus;