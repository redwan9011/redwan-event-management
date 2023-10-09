import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
const {user,logOut} = useContext(AuthContext)
    const links = <>
    <li > <NavLink 
    className="px-6"
   style={({ isActive,  }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      background: isActive ? "red" : "black",
      color: isActive ? "white" : "white",
    };
  }}
     to="/">Home
     </NavLink></li>

    <li className="mx-5"><NavLink to="/about"
         className="px-6  "
         style={({ isActive,  }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "red" : "black",
            color: isActive ? "white" : "white",
          };
        }}
    >About Us</NavLink></li>

     <li><NavLink
      className="px-6"
      style={({ isActive,  }) => {
       return {
         fontWeight: isActive ? "bold" : "",
         background: isActive ? "red" : "black",
         color: isActive ? "white" : "white",
       };
     }}
     to="/contact">Contact US</NavLink></li>
    
 </>
    return (
        <div>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2  shadow bg-base-100 rounded-box w-52">
    {
        links
    }
      </ul>
    </div>
  
  <img className="w-16 md:w-32" src="https://i.ibb.co/2FrgDdc/top-pr-agencies.webp" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {
     links
   }
    </ul>
  </div>
  <div className="navbar-end w-full md:w-8/12">
    {
      user ? <div className="flex items-center gap-2">
        <img className="w-10 h-10 md:w-11 md:h-11 rounded-full" src={user?.photoURL} alt="" />
        <p className="text-sm md:text-xl font-bold ">{user?.displayName}</p>
        <Link onClick={logOut} className="btn bg-red-600 hover:bg-red-800 text-white md:px-6" to="/">LogOut</Link> 
      </div>: 
      <Link className="btn bg-red-600 hover:bg-red-800 text-white" to = "/login">Login / Register </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;