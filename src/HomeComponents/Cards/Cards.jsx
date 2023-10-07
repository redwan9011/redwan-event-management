import PropTypes from 'prop-types';
import CardShow from './CardShow';

const Cards = ({cards}) => {
    
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                cards.map(card => <CardShow key={card.id} card={card}> </CardShow>)
            }
        </div>
    );
};


Cards.propTypes = {
    cards:PropTypes.array
}
export default Cards;