import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeComponents/Banner/Banner";
import Cards from "../../HomeComponents/Cards/Cards";


const Home = () => {
    const cards = useLoaderData()
   
    return (
        <div className="my-8">
            
            <Banner></Banner>
            <Cards cards={cards}></Cards>

        </div>
    );
};

export default Home;