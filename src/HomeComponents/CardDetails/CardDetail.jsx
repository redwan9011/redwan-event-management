import PropTypes from 'prop-types';


const CardDetail = ({card}) => {
const {title, image, short_description, price} = card || {}
    
    return (
        <div className='mb-10 mt-5'>
           <div className=" shadow-lg p-8 ">
                <img className="w-full md:h-[40vh] lg:h-[60vh]" src={image} alt="" />
                <h1 className= 'text-2xl md:text-3xl font-bold mt-5'>{title}</h1>
                <p className='text-slate-500 my-2'>{short_description}</p>
                <h2 className='text-xl font-semibold'>Price: <span className='font-bold'>{price}</span></h2>
              
            </div>
        </div>
    );
};

CardDetail.propTypes = {
    card:PropTypes.object
}

export default CardDetail;