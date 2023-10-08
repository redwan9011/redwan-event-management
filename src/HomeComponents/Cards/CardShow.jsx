import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const CardShow = ({card}) => {
    const {title, image, price, short_description, id} = card || {}
    return (
        <div>
            <div className=" shadow-lg rounded-md px-6 py-8 text-center hover:-translate-y-1  hover:translate-x-1  duration-100">
                <img className="w-full h-56" src={image} alt="" />
                <h1 className="text-2xl font-bold mt-3">{title}</h1>
                <p className="text-slate-500 text my-3">{short_description}</p>
                
                <h2 className="text-lg font-semibold"> Price: {price}</h2>
                <Link to={`/card/${id}`} className="btn w-full mt-3 bg-red-600 hover:bg-red-800 text-white"> <button>Show Details</button></Link>
               
            </div>
        </div>
    );
};

CardShow.propTypes = {
    card: PropTypes.object
}
export default CardShow;