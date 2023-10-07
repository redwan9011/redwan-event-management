import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const CardShow = ({card}) => {
    const {title, image, price, short_description, id} = card || {}
    return (
        <div>
            <div className="bg-slate-200 shadow-lg ">
                <img className="w-full h-56" src={image} alt="" />
                <h1>{title}</h1>
                <p>{short_description}</p>
                <h2>{price}</h2>
                <Link to={`/card/${id}`}> <button>Show Details</button></Link>
            </div>
        </div>
    );
};

CardShow.propTypes = {
    card: PropTypes.object
}
export default CardShow;