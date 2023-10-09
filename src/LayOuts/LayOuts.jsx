import { Outlet } from "react-router-dom";
import Navbar from "../pages/Header/Navbar";
import Footer from "../pages/Footer/Footer";

 

const LayOuts = () => {
    return (
      <div className="font-[Roboto]">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
        <Footer ></Footer>
      </div>
    );
};

export default LayOuts;