import PropTypes from 'prop-types';
import CardShow from './CardShow';

const Cards = ({cards}) => {
    
    return (
       <div>
         <h1 className='text-6xl font-bold font-mono text-center mb-5'>Our Services!!</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           
            {
                cards.map(card => <CardShow key={card.id} card={card}> </CardShow>)
            }
        </div>
       </div>
    );
};


Cards.propTypes = {
    cards:PropTypes.array
}
export default Cards;