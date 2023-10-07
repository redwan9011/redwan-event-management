import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeComponents/Banner/Banner";
import Cards from "../../HomeComponents/Cards/Cards";
import Team from "../../HomeComponents/Team/Team";


const Home = () => {
    const cards = useLoaderData()
   
    return (
        <div className="my-8">
            
            <Banner></Banner>
            <Cards cards={cards}></Cards>
            <Team></Team>

        </div>
    );
};

export default Home;