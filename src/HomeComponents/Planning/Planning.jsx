import { HiHomeModern, HiMiniChatBubbleBottomCenterText} from 'react-icons/hi2';
import { BsPencilSquare, BsStars } from "react-icons/bs";

const Planning = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center font-bold text-5xl font-mono'> <span className='text-red-500 '>Hello!</span> We Are an Event Planning Agency</h1>

            <p className='text-center px-64 mt-6 font-semibold text-slate-500'>As the premier event planning company in New York City, we know that it’s not “one size fits all”. Each event and client is unique and we believe our services should be as well. We know that it should be “Can I hire a planner?” not “Can I afford one?”.</p>

            <div className='grid grid-cols-4 justify-between mt-8  text-center'>

                <div className=' flex  flex-col items-center'>
                    <HiHomeModern className='text-6xl text-red-400'></HiHomeModern>
                    <p className='font-semibold py-3'>Find the perfect venue for free</p>
                    <h2 className='bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center p-5'>1</h2> 
                  
                </div>

                <div className=' flex  flex-col items-center'>
                    <HiMiniChatBubbleBottomCenterText className='text-6xl text-red-400'></HiMiniChatBubbleBottomCenterText>
                    <p className='font-semibold py-3'>Connect with the best vendor</p>
                    <h2 className='bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center p-5'>2</h2>
                </div>
                <div className=' flex  flex-col items-center'>
                   <BsPencilSquare className='text-6xl text-red-400'></BsPencilSquare>
                    <p className='font-semibold py-3'>Let us help you with the event</p>
                    <h2 className='bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center p-5'> 3</h2>
                </div>
                <div className=' flex  flex-col items-center'>
                   <BsStars className='text-6xl text-red-400'></BsStars>
                    <p className='font-semibold py-3'>Enjoy the party with your friends</p>
                  
                 
                   <h2 className='bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center p-5'>4</h2>
                    
                 
                </div>

            </div>
        </div>
    );
};

export default Planning;