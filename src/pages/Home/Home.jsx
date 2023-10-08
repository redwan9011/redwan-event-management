import { useLoaderData } from "react-router-dom";
import Banner from "../../HomeComponents/Banner/Banner";
import Cards from "../../HomeComponents/Cards/Cards";
import Team from "../../HomeComponents/Team/Team";
import Planning from "../../HomeComponents/Planning/Planning";



const Home = () => {
    const cards = useLoaderData()
   
    return (
        <div className="my-8">
            
            <Banner></Banner>
            <Planning></Planning>
            <Cards cards={cards}></Cards>
          
            <Team></Team>

        </div>
    );
};

export default Home;