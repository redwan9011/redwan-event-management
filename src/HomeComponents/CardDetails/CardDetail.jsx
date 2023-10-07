import PropTypes from 'prop-types';


const CardDetail = ({card}) => {
const {title, image, short_description, price} = card || {}
    
    return (
        <div>
           <div className="bg-slate-200 shadow-lg ">
                <img className="w-full h-[60vh]" src={image} alt="" />
                <h1>{title}</h1>
                <p>{short_description}</p>
                <h2>{price}</h2>
              
            </div>
        </div>
    );
};

CardDetail.propTypes = {
    card:PropTypes.object
}

export default CardDetail;